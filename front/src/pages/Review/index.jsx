import { useEffect, useState } from "react";
import { ScoreInput } from "../../components/ScoreInput";
import { Container, Wrapper } from "./style";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { fetchApi } from "../../api";

export function Review() {
  const [content, setContent] = useState("");
  const [score, setScore] = useState(3);
  const [storeName, setStoreName] = useState("");
  const [isModify, setIsModify] = useState(false);
  const { storeId } = useParams();
  const history = useHistory();

  function createReview() {
    if (!content.split(" ").join("")) {
      alert("내용을 입력해주세요.");
      return;
    }
    fetchApi(`/api/review/${storeId}`, "post", {
      score: score,
      content: content,
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
  function modifyReview() {
    if (!content.split(" ").join("")) {
      alert("내용을 입력해주세요.");
      return;
    }

    fetchApi(`/api/review/${history.location.state.review.reviewId}`, "PATCH", {
      score: score,
      content: content,
    })
      .then((res) => {
        if (res.status === 200) {
          alert("리뷰 수정 완료");
          history.replace(`/store/${storeId}`);
        } else {
          alert("리뷰 수정 실패");
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

  function getMode() {
    if (history.location.state) {
      const review = history.location.state.review;
      console.log(review);
      setIsModify(true);
      setScore(review.score);
      setContent(review.content);
    }
  }

  useEffect(() => {
    getStoreName();
    getMode();
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
          <button
            className="complete"
            onClick={() => {
              if (isModify) {
                modifyReview();
              } else {
                createReview();
              }
            }}
          >
            완료
          </button>
        </div>
      </Container>
    </Wrapper>
  );
}
