import React from "react";
import { useHistory } from "react-router";
import { Logo, Menu, Search, Wrapper } from "./style";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const history = useHistory();
  function isLoggedIn() {
    return true;
  }
  return (
    <Wrapper>
      <Logo>
        <img
          src="images/logo.png"
          alt=""
          srcset=""
          onClick={() => {
            history.push("/");
          }}
        />
      </Logo>
      {isLoggedIn() && (
        <Search>
          <span className="icon">
            <BsSearch />
          </span>
          <input
            type="text"
            placeholder="지역, 식당 또는 음식"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Search>
      )}
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
