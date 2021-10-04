import { useState } from "react";
import { ScoreInput } from "../../components/ScoreInput";
import { Container, Wrapper } from "./style";

export function Review() {
  const [content, setContent] = useState("");
  const [score, setScore] = useState(3);

  return (
    <Wrapper>
      <Container>
        <h2>AAA 식당에 대한 솔직한 리뷰를 작성해주세요.</h2>
        <ScoreInput score={score} setScore={setScore} />
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="주문하신 메뉴, 맛, 서비스, 분위기 등에 대해 작성해주세요!"
        ></textarea>
        <div className="buttons">
          <button className="cancel">취소</button>
          <button className="complete">완료</button>
        </div>
      </Container>
    </Wrapper>
  );
}
