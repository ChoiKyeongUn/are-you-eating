import { useEffect, useState } from "react";
import StoreItem from "../../components/StoreItem";
import { StoreList, Wrapper } from "./style";

export default function Main() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const stores = [];
    stores.push({
      title: "롯데리아",
      score: 4.5,
      img: "https://picsum.photos/250/250",
      address: "대전광역시 유성구 덕명동 123-4",
      desc: "맛있는 햄버거집",
    });
    stores.push({
      title: "지코바",
      score: 5,
      img: "https://picsum.photos/250/251",
      address: "대전광역시 유성구 궁동 429-2",
      desc: "맛있는 치킨집",
    });
    stores.push({
      title: "헤이마오차이",
      score: 4.5,
      img: "https://picsum.photos/250/252",
      address: "대전 유성구 궁동 393-3",
      desc: "마라탕집",
    });
    setStores(stores);
  }, []);

  return (
    <Wrapper>
      <h1>김싸피님 취향 저격 맛집 추천</h1>
      <StoreList>
        {stores.map((store, i) => (
          <StoreItem store={store} key={i} />
        ))}
      </StoreList>
    </Wrapper>
  );
}
