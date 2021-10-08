import { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { useHistory } from "react-router";
import {
  Button,
  Container,
  InputWithMessage,
  LogInBox,
  StyledInput,
  Wrapper,
} from "./style";
import { fetchApi } from "../../api";
import { login } from "../../actions/User";

export default function LogIn() {
  const id = useInput("");
  const password = useInput("");
  const history = useHistory();
  const dispatch = useDispatch();

  function doLogin(data) {
    const user = {
      id: id.value,
      ...data,
    };
    dispatch(login(user));
    history.replace("/");
  }

  function handleKeyPress(e) {
    if (e.key !== "Enter") return;
    handleLoginButtonClick();
  }

  function handleLoginButtonClick() {
    fetchApi("/api/users/signin", "post", {
      id: id.value,
      password: password.value,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          alert("아이디와 비밀번호를 확인하세요.");
        }
      })
      .then((data) => {
        if (data) {
          doLogin(data);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
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
                onKeyPress={handleKeyPress}
              ></StyledInput>
              <div className="message">{id.errorMessage}</div>
            </InputWithMessage>
            <InputWithMessage>
              <StyledInput
                placeholder="비밀번호"
                value={password.value}
                onChange={password.onChange}
                type="password"
                onKeyPress={handleKeyPress}
              ></StyledInput>
              <div className="message">{password.errorMessage}</div>
            </InputWithMessage>
          </div>
          <div className="buttons">
            <Button onClick={handleLoginButtonClick}>로그인</Button>
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
    </Container>
  );
}
