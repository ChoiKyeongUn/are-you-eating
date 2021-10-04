import { useEffect, useState } from "react";
import { ScoreInput } from "../../components/ScoreInput";
import { Container, Wrapper } from "./style";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { fetchApi } from "../../api";

export function Review() {
  const [content, setContent] = useState("");
  const [score, setScore] = useState(3);
  const [storeName, setStoreName] = useState("");
  const { storeId } = useParams();
  const history = useHistory();

  function createReview() {
    if (!content.split(" ").join("")) {
      alert("내용을 작성해주세요.");
      return;
    }
    fetchApi(`/api/review/${storeId}`, "post", {
      score: score,
      content: content,
      regTime: new Date(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("리뷰 작성 완료");
          history.replace(`/store/${storeId}`);
        } else {
          alert("리뷰 작성 실패");
        }
      })
      .catch((err) => console.log(err));
  }

  function getStoreName() {
    fetchApi(`/api/store/${storeId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStoreName(data.name);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getStoreName();
  }, []);
  return (
    <Wrapper>
      <Container>
        <h2>{storeName}에 대한 솔직한 리뷰를 작성해주세요.</h2>
        <ScoreInput score={score} setScore={setScore} />
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="주문하신 메뉴, 맛, 서비스, 분위기 등에 대해 작성해주세요!"
        ></textarea>
        <div className="buttons">
          <button
            className="cancel"
            onClick={() => {
              history.replace(`/store/${storeId}`);
            }}
          >
            취소
          </button>
          <button className="complete" onClick={createReview}>
            완료
          </button>
        </div>
      </Container>
    </Wrapper>
  );
}
