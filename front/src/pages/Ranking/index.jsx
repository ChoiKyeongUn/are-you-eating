import { useEffect, useState } from "react";
import StoreItem from "../../components/StoreItem";
import { Icon } from "@iconify/react";
import {
  Wrapper5,
  Wrapper4,
  Wrapper3,
  Wrapper2,
  Wrapper,
  Container,
  Wrapper1,
} from "./style";
import { fetchApi } from "../../api";

export default function Ranking() {
  const [rank, setRank] = useState([]);

  function getSortedRank(rank) {
    const newRank = [...rank];
    newRank.sort((r1, r2) => r2.count - r1.count);
    return newRank;
  }

  useEffect(() => {
    fetchApi("/api/users/ranking")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRank(getSortedRank(data));
      });
  }, []); // 한번만 실행

  return (
    <Container>
      <h1>이달의 리뷰왕</h1>
      {rank.map((item, i) =>
        i === 0 ? (
          <Wrapper1>
            <div>
              <img
                src="{item.userImage}"
                alt=""
                onError={(e) => {
                  e.target.src =
                    "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";
                }}
              ></img>
              <span className="icon">
                <Icon
                  icon="twemoji:1st-place-medal"
                  width="50px"
                  height="50px"
                />
              </span>
            </div>
            <h3 className="username">{item.id}</h3>
            <h3 className="count">{item.count}개</h3>
          </Wrapper1>
        ) : i === 1 ? (
          <Wrapper>
            <div className="ranking">
              <Icon icon="twemoji:2nd-place-medal" width="50px" height="50px" />
            </div>
            <div>
              <img
                src="{item.userImage}"
                alt=""
                onError={(e) => {
                  e.target.src =
                    "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";
                }}
              ></img>
            </div>
            <div>
              <h3 className="username">{item.id}</h3>
              <h3 className="count">{item.count}개</h3>
            </div>
          </Wrapper>
        ) : i === 2 ? (
          <Wrapper>
            <div className="ranking">
              <Icon icon="twemoji:3rd-place-medal" width="50px" height="50px" />
            </div>
            <div>
              <img
                src="{item.userImage}"
                alt=""
                onError={(e) => {
                  e.target.src =
                    "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";
                }}
              ></img>
            </div>
            <div>
              <h3 className="username">{item.id}</h3>
              <h3 className="count">{item.count}개</h3>
            </div>
          </Wrapper>
        ) : (
          <Wrapper>
            <div className="ranking">{i + 1}</div>
            <div>
              <img
                src="{item.userImage}"
                alt=""
                onError={(e) => {
                  e.target.src =
                    "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";
                }}
              ></img>
            </div>
            <div>
              <h3 className="username">{item.id}</h3>
              <h3 className="count">{item.count}개</h3>
            </div>
          </Wrapper>
        )
      )}
    </Container>
  );
}
