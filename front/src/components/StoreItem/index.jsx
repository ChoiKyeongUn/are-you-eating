import { ImgContainer, InfoContainer, Wrapper } from "./style";

export default function StoreItem({ store }) {
  return (
    <Wrapper>
      <ImgContainer>
        <img src={store.img} alt="asd" />
      </ImgContainer>
      <InfoContainer>
        <div className="top">
          <div className="title">{store.title}</div>
          <div className="score">{store.score}</div>
        </div>
        <div className="mid">
          <div className="address">{store.address}</div>
        </div>
        <div className="bottom">
          <div className="desc">{store.desc}</div>
        </div>
      </InfoContainer>
    </Wrapper>
  );
}
