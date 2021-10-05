import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchApi } from "../../api";
import { Score } from "../Score";
import { Container, Content, ImageContainer, InfoContainer } from "./style";

export default function Review({ review, storeClick }) {
  const history = useHistory();
  function isMe() {
    const loginUserId = JSON.parse(localStorage.getItem("loginUser")).id;
    return loginUserId === review.id;
  }
  function handleStoreclick() {
    if (!storeClick) return;
    history.push(`/store/${review.storeId}`);
  }
  function handleModifyButtonClick() {
    history.push(`/review/${review.storeId}`, { review: review });
  }
  function handleDeleteButtonClick() {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      fetchApi(`/api/review/${review.reviewId}`, "delete")
        .then((res) => {
          if (res.status === 200) {
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container>
      <InfoContainer storeClick={storeClick}>
        <div className="image">
          <img
            src={review.userProfile ? review.userProfile : ""}
            alt=""
            onError={(e) => {
              e.target.src =
                "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";
            }}
          />
        </div>
        <div className="info">
          <div className="name">{review.userNickname}</div>
          <div className="store" onClick={handleStoreclick}>
            {review.storeName}
          </div>
          <section>
            <div className="score">
              <Score score={review.score} size={16} />
            </div>
            <div className="date">{`${new Date(review.regTime).getFullYear()}/${
              new Date(review.regTime).getMonth() + 1
            }/${new Date(review.regTime).getDate()}`}</div>
            {isMe() && (
              <div className="buttons">
                <button className="modify" onClick={handleModifyButtonClick}>
                  수정
                </button>
                <button className="delete" onClick={handleDeleteButtonClick}>
                  삭제
                </button>
              </div>
            )}
          </section>
        </div>
      </InfoContainer>

      <Content>
        <div className="content">{review.content}</div>
      </Content>
    </Container>
  );
}
