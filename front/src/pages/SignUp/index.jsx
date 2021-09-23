import { useState } from "react";
import useInput from "../../hooks/useInput";
import {
  Button,
  InputWithMessage,
  SignUpBox,
  StyledInput,
  Wrapper,
} from "./style";

export default function SignUp() {
  const id = useInput("", idValidator);
  const password = useInput("", passwordValidator);
  const nickname = useInput("", nicknameValidator);
  const [gender, setGender] = useState("남자");

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

  function idValidator(value) {
    if (value.length < 4 || value.length > 15) {
      return {
        isValid: false,
        errorMessage: "4글자 이상 15글자 이하로 입력해주세요",
      };
    } else {
      return {
        isValid: true,
        errorMessage: "",
      };
    }
  }
  return (
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
                  setGender("남자");
                }}
              >
                <div
                  className={gender === "남자" ? "input checked" : "input"}
                ></div>
                <div className="label">남자</div>
              </div>
              <div
                className="radio-item"
                onClick={() => {
                  setGender("여자");
                }}
              >
                <div
                  className={gender === "여자" ? "input checked" : "input"}
                ></div>
                <div className="label">여자</div>
              </div>
            </div>
          </div>
          <InputWithMessage>
            <StyledInput
              placeholder="생년월일 (yyyymmdd)"
              type="number"
            ></StyledInput>
            <div className="message"></div>
          </InputWithMessage>
          <InputWithMessage>
            <StyledInput placeholder="주소"></StyledInput>
            <div className="message"></div>
          </InputWithMessage>
        </div>
        <Button>회원가입</Button>
      </SignUpBox>
    </Wrapper>
  );
}
