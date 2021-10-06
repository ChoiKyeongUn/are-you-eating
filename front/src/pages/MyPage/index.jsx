import { useEffect, useState } from "react";
import { BsCamera } from "react-icons/bs";
import ReactS3Client from "../../S3";
import { Container, ReviewWrapper, Wrapper } from "./style";
import { fetchApi } from "../../api";
import Review from "../../components/Review";
import AddressSearch from "../../components/AddressSearch";

export default function LogIn() {
  const [modifyMode, setModifyMode] = useState(false);
  const [profile, setProfile] = useState({});
  const [nickname, setNickname] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState({});
  const [addressModalShow, setAddressModalShow] = useState(false);
  const [modifyImage, setModifyImage] = useState(false);
  const [userImage, setUserImage] = useState("");

  // s3 서버에 업로드 할 유니크한 파일 이름
  function getFileName(file) {
    const today = new Date();
    const fileName = `user-${today.getFullYear()}${
      today.getMonth() + 1
    }${today.getDate()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}${today.getMilliseconds()}${
      file.name
    }`;
    return fileName;
  }

  //   s3 서버에 이미지 업로드 하고 {url, order} 리스트 반환
  async function getImage(image) {
    if (image.files) {
      const file = image.files[0];
      const newFileName = getFileName(file);
      await ReactS3Client.uploadFile(file, newFileName)
        .then((data) => {
          fetchApi(`/api/users`, "PATCH", { profilePath: data.location })
            .then((res) => {
              if (res.status === 200) {
                window.location.reload();
              }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.error(err));
    }
  }

  //   파일읽기
  function handleImageReader(file) {
    // 보여주기 위한 사진정보를 추출
    let reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  }
  //   사용자가 업로드한 이미지 postImg state에 저장
  async function handleImageCreate(e) {
    const fileNm = e.target.value;
    const fileList = e.target.files;
    if (!fileNm) {
      return false;
    }
    const ext = fileNm.slice(fileNm.lastIndexOf(".") + 1).toLowerCase();
    if (!(ext === "gif" || ext === "jpg" || ext === "png" || ext === "jpeg")) {
      alert("이미지파일 (.jpg, .png, .gif ) 만 업로드 가능합니다.");
      e.target.value = "";
      return false;
    }
    const file = fileList[0];

    let imgUrl = await handleImageReader(file);
    let tempImage = {
      imgUrl: imgUrl,
      files: [file],
    };
    getImage(tempImage);
  }

  function handleCompleteButtonClick() {
    if (nickname.length < 2 || birth.length !== 10) {
      alert("잘 입력하세요.");
      return;
    }
    const data = {
      profilePath: profile.profilePath,
      nickname: nickname,
      birth: birth,
      address: address.address,
      longitude: address.longitude,
      latitude: address.latitude,
    };
    fetchApi(`/api/users`, "PATCH", data)
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  }
  function handleBirthChange(e) {
    const word = e.nativeEvent.data;
    const value = e.target.value;
    if (!(word >= "0" && word <= "9")) {
      return;
    }
    if (word === null) {
      setBirth(value);
    } else if (value.length === 4 || value.length === 7) {
      setBirth(value + "-");
    } else if (value.length > 10) {
      return;
    } else {
      setBirth(value);
    }
  }
  function modalClose() {
    setAddressModalShow(false);
  }

  function handleAddressSelect(address) {
    setAddress(address);
  }

  function handleModifyButtonClick() {
    setModifyMode(true);
    setNickname(profile.nickname);
    setBirth(profile.birth);
    setAddress({
      address: profile.address,
      latitude: profile.latitude,
      longitude: profile.longitude,
    });
  }

  function sortedReviews(reviews) {
    const newReviews = [...reviews];
    newReviews.sort((r1, r2) => new Date(r2.regTime) - new Date(r1.regTime));
    return newReviews;
  }

  useEffect(() => {
    fetchApi(`/api/users`)
      .then((res) => res.json())
      .then((data) => {
        setUserImage(data.profilePath ? data.profilePath : "");
        setProfile(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Wrapper>
        <div
          className="image"
          onMouseEnter={() => {
            setModifyImage(true);
          }}
          onMouseLeave={() => {
            setModifyImage(false);
          }}
        >
          {modifyImage && (
            <div className="edit-image">
              <BsCamera size={24} />
            </div>
          )}
          <img
            src={profile.profilePath ? profile.profilePath : ""}
            alt="profile"
            onError={(e) => {
              e.target.src = "/images/default_user.png";
            }}
          />
          <label htmlFor="upload"></label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            onChange={handleImageCreate}
          />
        </div>
        <div className="info">
          <div className="line">
            <div className="key">아이디</div>
            <div className="value">{profile.id}</div>
          </div>
          <div className="line">
            <div className="key">닉네임</div>
            {modifyMode ? (
              <div className="input">
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => {
                    setNickname(e.target.value);
                  }}
                />
              </div>
            ) : (
              <div className="value">{profile.nickname}</div>
            )}
          </div>
          <div className="line">
            <div className="key">생년월일</div>
            {modifyMode ? (
              <div className="input">
                <input type="text" value={birth} onChange={handleBirthChange} />
              </div>
            ) : (
              <div className="value">{profile.birth}</div>
            )}
          </div>
          <div className="line">
            <div className="key">주소</div>
            {modifyMode ? (
              <div className="input">
                <input
                  type="text"
                  readOnly={true}
                  value={address.address}
                  onClick={() => {
                    setAddressModalShow(true);
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
            ) : (
              <div className="value">{profile.address}</div>
            )}
          </div>
        </div>
        <div className="modify">
          {modifyMode ? (
            <>
              <button
                className="cancel"
                onClick={() => {
                  setModifyMode(false);
                }}
              >
                취소
              </button>
              <button className="complete" onClick={handleCompleteButtonClick}>
                완료
              </button>
            </>
          ) : (
            <button onClick={handleModifyButtonClick}>프로필 수정</button>
          )}
        </div>
      </Wrapper>
      <ReviewWrapper>
        <h2>리뷰({profile.reviews && profile.reviews.length})</h2>
        {profile.reviews &&
          sortedReviews(profile.reviews).map((review, i) => (
            <div className="review-wrapper">
              <Review review={review} storeClick={true} />
            </div>
          ))}
      </ReviewWrapper>
      {addressModalShow && (
        <AddressSearch
          modalClose={modalClose}
          handleAddressSelect={handleAddressSelect}
        />
      )}
    </Container>
  );
}
