import { useEffect, useState } from "react";
import { Wrapper } from "./style";

export function ScoreInput({ score, setScore }) {
  const [hoverScore, setHoverScore] = useState(3);
  function handleMouseEnter(e, s) {
    setHoverScore(s);
  }
  function handleMouseLeave(e, s) {
    setHoverScore(score);
  }
  function handleClick(e, s) {
    setScore(s);
  }
  useEffect(() => {
    setHoverScore(score);
  }, [score]);
  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((s) => (
        <div className="item" key={s}>
          <img
            src="/images/score.png"
            alt=""
            className={s <= hoverScore ? "" : "disabled"}
            onMouseEnter={(e) => {
              handleMouseEnter(e, s);
            }}
            onMouseLeave={(e) => {
              handleMouseLeave(e, s);
            }}
            onClick={(e) => {
              handleClick(e, s);
            }}
          />
        </div>
      ))}
    </Wrapper>
  );
}
