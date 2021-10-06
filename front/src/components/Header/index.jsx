import React from "react";
import { useHistory } from "react-router";
import { Box, Logo, Menu, Search, Wrapper } from "./style";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/User";

export default function Header() {
  const [search, setSearch] = useState("");
  const user = useSelector((state) => state.userReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();

  function handleKeyPress(e) {
    if (e.key !== "Enter") return;
    if (search.split(" ").join("").length < 1) return;
    history.replace(`/search`, { keyword: search });
  }
  function doLogout() {
    dispatch(logout());
    history.push("/login");
  }

  function isLoggedIn() {
    if (user.token) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <Wrapper>
        <Logo>
          <img
            src="/images/logo.png"
            alt="logo"
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
              placeholder="식당 이름"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={handleKeyPress}
            />
          </Search>
        )}
        <Menu>
          {isLoggedIn() ? (
            <>
              <span
                onClick={() => {
                  history.push("/ranking");
                }}
              >
                랭킹
              </span>
              <span
                onClick={() => {
                  history.push("/mypage");
                }}
              >
                {user.id}
              </span>
              <span onClick={doLogout}>로그아웃</span>
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
      <Box></Box>
    </>
  );
}
