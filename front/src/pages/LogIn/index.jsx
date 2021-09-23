import { useState } from "react";
import useInput from "../../hooks/useInput";
import { useHistory } from "react-router";
import {
  Button,
  InputWithMessage,
  LogInBox,
  StyledInput,
  Wrapper,
} from "./style";

export default function LogIn() {
  const id = useInput("");
  const password = useInput("");
  const history = useHistory();

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
      <LogInBox>
        <div className="text">
          <h1>로그인</h1>
          <h2>아이디와 비밀번호를 입력하세요.</h2>
        </div>
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
        </div>
        <div className="buttons">
          <Button>로그인</Button>
          <Button
            outline
            onClick={() => {
              history.push("/signup");
            }}
          >
            회원가입
          </Button>
        </div>
      </LogInBox>
    </Wrapper>
  );
}
