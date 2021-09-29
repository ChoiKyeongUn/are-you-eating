import { useEffect, useState } from "react";
import Review from "../../components/Review";
import {
  ImageContainer,
  Info,
  Line,
  Recommend,
  ReviewContainer,
  Wrapper,
} from "./style";

export default function Store() {
  const [store, setStore] = useState({});
  const [reviews, setReviews] = useState([]);
  const [recommend, setRecommend] = useState([]);

  function initStore() {
    const store = {};
    store.images = [0, 1, 2, 3, 4, 5, 6, 7].map(
      (i) => `https://picsum.photos/250/${250 + i}`
    );
    store.title = "ㅁㅁㅁ식당";
    store.score = 4.5;
    store.address = "대전광역시 유성구 궁동 400";
    store.tel = "070-1234-5678";
    store.type = "스시/롤";
    console.log(store);
    setStore(store);
  }

  function initReviews() {
    const reviews = [];
    reviews.push({
      images: [0, 1, 2, 3].map((i) => `https://picsum.photos/250/${250 + i}`),
      userImage: `https://picsum.photos/100/100`,
      userName: "변대웅",
      storeName: "롯데리아",
      score: 4.5,
      date: new Date(),
      content: `오늘은 급 햄버거가 땡긴 우미당이 롯데리아에 다녀온 후기를 써볼까 합니당.!
      9시 넘어서 찾아간 롯데리아.
      제가 찾아간 롯데리아는 한밭대점인데, 1층과 2층을 모두 사용하고 있는 규모가 큰~ 롯데리아에요 ㅋ
      5월 26일부터 28일까지!! 단 3일간! 데리버거 두개에 3,900원이니!! 늦지말고 꼭 가셔요 ㅎ
      (참고로 데리버거 하나 가격은 3,500원 입니당.!)
      하지만! 오늘 우미당이 먹어볼 햄버거는!?
      오호.. 치즈 No.5 세트로 시키면 치즈스틱이 공짜!!!
      `,
    });
    reviews.push({
      images: [0, 1, 2, 3, 4, 5, 6, 7].map(
        (i) => `https://picsum.photos/250/${250 + i}`
      ),
      userImage: `https://picsum.photos/100/100`,
      userName: "변대웅",
      storeName: "롯데리아",
      score: 4.5,
      date: new Date(),
      content: `오늘은 급 햄버거가 땡긴 우미당이 롯데리아에 다녀온 후기를 써볼까 합니당.!
      9시 넘어서 찾아간 롯데리아.
      제가 찾아간 롯데리아는 한밭대점인데, 1층과 2층을 모두 사용하고 있는 규모가 큰~ 롯데리아에요 ㅋ
      5월 26일부터 28일까지!! 단 3일간! 데리버거 두개에 3,900원이니!! 늦지말고 꼭 가셔요 ㅎ
      (참고로 데리버거 하나 가격은 3,500원 입니당.!)
      하지만! 오늘 우미당이 먹어볼 햄버거는!?
      오호.. 치즈 No.5 세트로 시키면 치즈스틱이 공짜!!!
      `,
    });
    reviews.push({
      images: [0, 1, 2, 3, 4, 5, 6, 7].map(
        (i) => `https://picsum.photos/250/${250 + i}`
      ),
      userImage: `https://picsum.photos/100/100`,
      userName: "변대웅",
      storeName: "롯데리아",
      score: 4.5,
      date: new Date(),
      content: `오늘은 급 햄버거가 땡긴 우미당이 롯데리아에 다녀온 후기를 써볼까 합니당.!
      9시 넘어서 찾아간 롯데리아.
      제가 찾아간 롯데리아는 한밭대점인데, 1층과 2층을 모두 사용하고 있는 규모가 큰~ 롯데리아에요 ㅋ
      5월 26일부터 28일까지!! 단 3일간! 데리버거 두개에 3,900원이니!! 늦지말고 꼭 가셔요 ㅎ
      (참고로 데리버거 하나 가격은 3,500원 입니당.!)
      하지만! 오늘 우미당이 먹어볼 햄버거는!?
      오호.. 치즈 No.5 세트로 시키면 치즈스틱이 공짜!!!
      `,
    });
    reviews.push({
      images: [0, 1, 2, 3, 4, 5, 6, 7].map(
        (i) => `https://picsum.photos/250/${250 + i}`
      ),
      userImage: `https://picsum.photos/100/100`,
      userName: "변대웅",
      storeName: "롯데리아",
      score: 4.5,
      date: new Date(),
      content: `오늘은 급 햄버거가 땡긴 우미당이 롯데리아에 다녀온 후기를 써볼까 합니당.!
      9시 넘어서 찾아간 롯데리아.
      제가 찾아간 롯데리아는 한밭대점인데, 1층과 2층을 모두 사용하고 있는 규모가 큰~ 롯데리아에요 ㅋ
      5월 26일부터 28일까지!! 단 3일간! 데리버거 두개에 3,900원이니!! 늦지말고 꼭 가셔요 ㅎ
      (참고로 데리버거 하나 가격은 3,500원 입니당.!)
      하지만! 오늘 우미당이 먹어볼 햄버거는!?
      오호.. 치즈 No.5 세트로 시키면 치즈스틱이 공짜!!!
      `,
    });
    reviews.push({
      images: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
        (i) => `https://picsum.photos/250/${250 + i}`
      ),
      userImage: `https://picsum.photos/100/100`,
      userName: "변대웅",
      storeName: "롯데리아",
      score: 4.5,
      date: new Date(),
      content: `오늘은 급 햄버거가 땡긴 우미당이 롯데리아에 다녀온 후기를 써볼까 합니당.!
      9시 넘어서 찾아간 롯데리아.
      제가 찾아간 롯데리아는 한밭대점인데, 1층과 2층을 모두 사용하고 있는 규모가 큰~ 롯데리아에요 ㅋ
      5월 26일부터 28일까지!! 단 3일간! 데리버거 두개에 3,900원이니!! 늦지말고 꼭 가셔요 ㅎ
      (참고로 데리버거 하나 가격은 3,500원 입니당.!)
      하지만! 오늘 우미당이 먹어볼 햄버거는!?
      오호.. 치즈 No.5 세트로 시키면 치즈스틱이 공짜!!!
      `,
    });
    setReviews(reviews);
  }

  function initRecommend() {
    const recommend = [];
    recommend.push({
      image: "https://picsum.photos/250/250",
      name: "싸피벅스",
      address: "대전 유성구 궁동 392-3",
    });
    recommend.push({
      image: "https://picsum.photos/140/251",
      name: "카페카페",
      address: "대전 유성구 궁동 392-3",
    });
    recommend.push({
      image: "https://picsum.photos/150/252",
      name: "커피365",
      address: "대전 유성구 궁동 392-3",
    });

    setRecommend(recommend);
  }

  useEffect(() => {
    initStore();
    initReviews();
    initRecommend();
  }, []);
  return (
    <Wrapper>
      <ImageContainer>
        {store.images &&
          store.images.map((img, i) => (
            <div className="item">
              <img src={img} alt="" />
            </div>
          ))}
      </ImageContainer>
      <div className="bottom">
        <div className="left">
          <Info>
            <div className="top">
              <div className="title">{store.title}</div>
              <div className="score">{store.score}</div>
            </div>
            <Line />
            <div className="line">
              <div className="key">주소</div>
              <div className="value">{store.address}</div>
            </div>
            <div className="line">
              <div className="key">전화번호</div>
              <div className="value">{store.tel}</div>
            </div>
            <div className="line">
              <div className="key">음식 종류</div>
              <div className="value">{store.type}</div>
            </div>
            <Line />
          </Info>
          <ReviewContainer>
            {reviews.map((review, i) => (
              <Review review={review} key={i} />
            ))}
          </ReviewContainer>
        </div>
        <Recommend>
          <h3>연관 맛집</h3>
          <div className="list">
            {recommend.map((item, i) => (
              <div className="item" key={i}>
                <div className="left">
                  <img src={item.image} alt="" srcset="" />
                </div>
                <div className="right">
                  <div className="name">{item.name}</div>
                  <div className="address">{item.address}</div>
                </div>
              </div>
            ))}
          </div>
        </Recommend>
      </div>
    </Wrapper>
  );
}
