import { useEffect, useState } from "react";
import StoreItem from "../../components/StoreItem";
import { Icon } from '@iconify/react';
import { Wrapper } from "./style";

export default function Ranking() {
  

  return (
      <div>
      <br/>
       <h1 style={
           {
                marginTop : "50px",
                textAlign : "center",
           }
       }>YYYY 년 M월 식습관 레포트</h1>
       <h3 style={
           {
                textAlign : "center",
                color: "#8492a6", 
           }
       }>작성한 리뷰를 집계해 어떤 식당에 방문하였는지 정보를 한눈에 파악할 수 있습니다.</h3>
    <Wrapper>
    <div>날짜</div>
    <div>차트</div>
    </Wrapper>
    </div>
  );
}
