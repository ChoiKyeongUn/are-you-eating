import { Container, Content, ImageContainer, InfoContainer } from "./style";

export default function Review({ review }) {
  return (
    <Container>
      <InfoContainer>
        <div className="image">
          <img src={review.userImage} alt="" srcset="" />
        </div>
        <div className="info">
          <div className="name">{review.userName}</div>
          <div className="store">{review.storeName}</div>
          <section>
            <div className="score">{review.score}</div>
            <div className="date">{`${review.date.getFullYear()}/${
              review.date.getMonth() + 1
            }/${review.date.getDate()}`}</div>
          </section>
        </div>
      </InfoContainer>
      <ImageContainer>
        {review.images &&
          review.images.map((img, i) => (
            <div className="item">
              <img src={img} alt="" />
            </div>
          ))}
      </ImageContainer>
      <Content>
        <div className="content">{review.content}</div>
      </Content>
    </Container>
  );
}
