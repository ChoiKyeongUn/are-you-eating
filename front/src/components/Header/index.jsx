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
