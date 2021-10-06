import { ImgContainer, InfoContainer, Wrapper } from "./style";
import { Score } from "../../components/Score";
import { useHistory } from "react-router";

export default function StoreItem({ store }) {
  const history = useHistory();

  function getTags(categories) {
    if (!categories) return "";
    const tags = categories.map((c) => `#${c}`).join(" ");
    return tags;
  }
  return (
    <Wrapper
      onClick={() => {
        history.push(`/store/${store.store_id}`);
      }}
    >
      <ImgContainer>
        <img
          src="{store.img}"
          alt="asd"
          onError={(e) => {
            e.target.src = "/images/default_store.png";
          }}
        />
      </ImgContainer>
      <InfoContainer>
        <div className="title">{store.name}</div>
        <div className="tags">{getTags(store.category)}</div>
        <div className="score">
          <Score score={store.score} size={20} />
        </div>
        <div className="address">
          {store.address} ({`거리 : ${parseInt(store.distance)}m`})
        </div>
        <div className="tel">{store.tel}</div>
      </InfoContainer>
    </Wrapper>
  );
}
