import { useEffect, useState } from "react";
import { Item, Wrapper } from "./style";

export function Score({ score, size }) {
  const [newScore, setNewScore] = useState(3);
  useEffect(() => {
    if (score > 0) setNewScore(score);
  }, [score]);
  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((s) => (
        <Item
          className="item"
          key={s}
          percent={
            s <= newScore
              ? 100
              : s >= newScore + 1
              ? 0
              : (1 - (s - newScore)) * 100
          }
          size={size}
        >
          <div className="block"></div>
          <img src="/images/score.png" alt="" />
        </Item>
      ))}
    </Wrapper>
  );
}
