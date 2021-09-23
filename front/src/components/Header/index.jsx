import React from "react";
import { useHistory } from "react-router";
import { colors } from "../../styles";
import { Logo, Menu, Search, Wrapper } from "./style";

export default function Header() {
  const history = useHistory();
  function isLoggedIn() {
    return false;
  }
  return (
    <Wrapper>
      <Logo>
        <img src="images/logo.png" alt="" srcset="" />
      </Logo>
      {isLoggedIn() && <Search></Search>}
      <Menu>
        {isLoggedIn() ? (
          <>
            <span>랭킹</span>
            <span>업적</span>
            <span>식습관 레포트</span>
            <span>김싸피</span>
            <span>로그아웃</span>
          </>
        ) : (
          <>
            <span
              onClick={() => {
                history.push("/login");
              }}
            >
              로그인
            </span>
            <span
              onClick={() => {
                history.push("/signup");
              }}
            >
              회원가입
            </span>
          </>
        )}
      </Menu>
    </Wrapper>
  );
}
