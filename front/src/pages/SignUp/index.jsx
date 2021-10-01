import { useState } from "react";
import { useHistory } from "react-router-dom";
import AddressSearch from "../../components/AddressSearch";
import useInput from "../../hooks/useInput";
import {
  Button,
  Container,
  InputWithMessage,
  SignUpBox,
  StyledInput,
  Wrapper,
} from "./style";
import { fetchApi } from "../../api";

export default function SignUp() {
  const id = useInput("", idValidator);
  const password = useInput("", passwordValidator);
  const passwordConfirm = useInput("", passwordConfirmValidator);
  const nickname = useInput("", nicknameValidator);
  const [gender, setGender] = useState("남성");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState({});
  const [addressModalShow, setAddressModalShow] = useState(false);

  const history = useHistory();

  function handleSignupButtonClick() {
    if (
      !id.isValid ||
      !password.isValid ||
      !passwordConfirm.isValid ||
      !nickname.isValid
    ) {
      return;
    }
    if (birth.length !== 10 || address.address === undefined) {
      return;
    }
    fetchApi("/api/users/signup", "post", {
      id: id.value,
      password: password.value,
      nickname: nickname.value,
      gender: gender,
      birth: birth,
      address: address.address,
      latitude: address.latitude,
      longitude: address.longitude,
    })
      .then((res) => {
        if (res.status === 200) {
          alert("회원가입 완료");
          history.push("/login");
        } else {
          alert("회원가입 실패");
        }
      })
      .catch((err) => console.log(err));
  }

  function modalClose() {
    setAddressModalShow(false);
  }

  function handleAddressSelect(address) {
    setAddress(address);
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

  function passwordConfirmValidator(value) {
    if (value === password.value) {
      return {
        isValid: true,
        errorMessage: "",
      };
    } else {
      return {
        isValid: false,
        errorMessage: "비밀번호가 일치하지 않습니다.",
      };
    }
  }

  function nicknameValidator(value) {
    if (value.length < 2 || value.length > 10) {
      return {
        isValid: false,
        errorMessage: "2글자 이상 10글자 이하로 입력해주세요",
      };
    } else {
      return {
        isValid: true,
        errorMessage: "",
      };
    }
  }

  function passwordValidator(value) {
    if (value.length < 8 || value.length > 30) {
      return {
        isValid: false,
        errorMessage: "8글자 이상 30글자 이하로 입력해주세요",
      };
    } else {
      return {
        isValid: true,
        errorMessage: "",
      };
    }
  }

  async function idValidator(value) {
    if (value.length < 4 || value.length > 15) {
      return {
        isValid: false,
        errorMessage: "4글자 이상 15글자 이하로 입력해주세요",
      };
    }
    const result = await fetchApi(`/api/users/checkId?id=${value}`, "get");
    if (result.status === 200) {
      return {
        isValid: true,
        errorMessage: "",
      };
    } else if (result.status === 409) {
      return {
        isValid: false,
        errorMessage: "이미 사용중인 아이디입니다.",
      };
    } else {
      return {
        isValid: true,
        errorMessage: "",
      };
    }
  }
  return (
    <Container>
      <Wrapper>
        <SignUpBox>
          <h1>회원가입</h1>
          <div className="inputs">
            <InputWithMessage>
              <StyledInput
                placeholder="아이디"
                value={id.value}
                onChange={id.onChange}
              ></StyledInput>
              <div className="message">{id.errorMessage}</div>
            </InputWithMessage>
            <InputWithMessage>
              <StyledInput
                placeholder="비밀번호"
                value={password.value}
                onChange={password.onChange}
                type="password"
              ></StyledInput>
              <div className="message">{password.errorMessage}</div>
            </InputWithMessage>
            <InputWithMessage>
              <StyledInput
                placeholder="비밀번호 확인"
                value={passwordConfirm.value}
                onChange={passwordConfirm.onChange}
                type="password"
              ></StyledInput>
              <div className="message">{passwordConfirm.errorMessage}</div>
            </InputWithMessage>
            <div className="box">
              <InputWithMessage>
                <StyledInput
                  placeholder="닉네임"
                  value={nickname.value}
                  onChange={nickname.onChange}
                ></StyledInput>
                <div className="message">{nickname.errorMessage}</div>
              </InputWithMessage>
              <div className="radio-box">
                <div
                  className="radio-item"
                  onClick={() => {
                    setGender("남성");
                  }}
                >
                  <div
                    className={gender === "남성" ? "input checked" : "input"}
                  ></div>
                  <div className="label">남자</div>
                </div>
                <div
                  className="radio-item"
                  onClick={() => {
                    setGender("여성");
                  }}
                >
                  <div
                    className={gender === "여성" ? "input checked" : "input"}
                  ></div>
                  <div className="label">여자</div>
                </div>
              </div>
            </div>
            <InputWithMessage>
              <StyledInput
                placeholder="생년월일 (yyyy-mm-dd)"
                type="text"
                value={birth}
                onChange={handleBirthChange}
              ></StyledInput>
              <div className="message"></div>
            </InputWithMessage>
            <InputWithMessage>
              <StyledInput
                placeholder="주소"
                value={address.address}
                readOnly
                onClick={() => {
                  setAddressModalShow(!addressModalShow);
                }}
              ></StyledInput>
              <div className="message"></div>
            </InputWithMessage>
          </div>
          <Button onClick={handleSignupButtonClick}>회원가입</Button>
        </SignUpBox>
        {addressModalShow && (
          <AddressSearch
            modalClose={modalClose}
            handleAddressSelect={handleAddressSelect}
          />
        )}
      </Wrapper>
    </Container>
  );
}
