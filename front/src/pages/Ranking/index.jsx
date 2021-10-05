import { useEffect, useState } from "react";
import StoreItem from "../../components/StoreItem";
import { Icon } from '@iconify/react';
import { Wrapper5, Wrapper4, Wrapper3, Wrapper2, Wrapper } from "./style";
import { fetchApi } from "../../api";

export default function Ranking() {
   const [rank, setRank] = useState([]);

  
   useEffect(() => {
      fetchApi("/api/users/ranking")
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setRank(data);
        });
    }, []); // 한번만 실행
 
  return (
      <div>
      <br/>
       <h1 margin-top="100px" align="center">이달의 리뷰왕</h1>
       {rank.length > 0 && (
        <>
          <Wrapper>
            <div>
              <img src="https://picsum.photos/250/250"></img>
              <Icon icon="twemoji:1st-place-medal" width="50px" height="50px" />
            </div>
            <h3 className="username">{rank[0].id}</h3>
            <h3 className="count">{rank[0].count}개</h3>
          </Wrapper>

          <Wrapper2>
            <div>
              <Icon icon="twemoji:2nd-place-medal" width="70px" height="70px" />
            </div>
            <div>
              <img src="https://picsum.photos/250/250"></img>
            </div>
            <div>
              <h3 className="username">{rank[1].id}</h3>
              <h3 className="count">{rank[1].count}개</h3>
            </div>
          </Wrapper2>
          <Wrapper3>
            <div>
              <Icon icon="twemoji:3rd-place-medal" width="70px" height="70px" />
            </div>
            <div>
              <img src="https://picsum.photos/250/250"></img>
            </div>
            <div>
              <h3 className="username">{rank[2].id}</h3>
              <h3 className="count">{rank[2].count}개</h3>
            </div>
          </Wrapper3>
          <Wrapper4>
            <div>
              <h1> 4</h1>
            </div>
            <div>
              <img src="https://picsum.photos/250/250"></img>
            </div>
            <div>
              <h3 className="username">{rank[3].id}</h3>
              <h3 className="count">{rank[3].count}개</h3>
            </div>
          </Wrapper4>
          <Wrapper5>
            <div>
              <h1> 5</h1>
            </div>
            <div>
              <img src="https://picsum.photos/250/250"></img>
            </div>
            <div>
              <h3 className="username">{rank[4].id}</h3>
              <h3 className="count">{rank[4].count}개</h3>
            </div>
          </Wrapper5>
        </>
      )}
    </div>
  );
}
