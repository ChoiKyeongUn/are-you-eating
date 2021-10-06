import { useEffect, useState } from "react";
import { Item, Wrapper } from "./style";

export function Score({ score, size }) {
  return (
    <Wrapper>
      {score > 0 ? (
        [1, 2, 3, 4, 5].map((s) => (
          <Item
            className="item"
            key={s}
            percent={
              s <= score ? 100 : s >= score + 1 ? 0 : (1 - (s - score)) * 100
            }
            size={size}
          >
            <div className="block"></div>
            <img src="/images/score.png" alt="" />
          </Item>
        ))
      ) : (
        <span>평가없음</span>
      )}
    </Wrapper>
  );
}
