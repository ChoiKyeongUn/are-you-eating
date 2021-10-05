import { useEffect } from "react";
import { Score } from "../Score";
import { Container, Content, ImageContainer, InfoContainer } from "./style";

export default function Review({ review }) {
  useEffect(() => {
    console.log(review);
  }, []);
  return (
    <Container>
      <InfoContainer>
        <div className="image">
          <img
            src=""
            alt=""
            srcset=""
            onError={(e) => {
              e.target.src =
                "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";
            }}
          />
        </div>
        <div className="info">
          <div className="name">{review.userNickname}</div>
          <div className="store">{review.storeName}</div>
          <section>
            <div className="score">
              <Score score={review.score} size={16} />
            </div>
            <div className="date">{`${new Date(review.regTime).getFullYear()}/${
              new Date(review.regTime).getMonth() + 1
            }/${new Date(review.regTime).getDate()}`}</div>
          </section>
        </div>
      </InfoContainer>

      <Content>
        <div className="content">{review.content}</div>
      </Content>
    </Container>
  );
}
