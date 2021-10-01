import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Container } from "./style";
import { BsCheckCircle } from "react-icons/bs";

import { fetchApi, url } from "../../api";
import { setLoggedin } from "../../actions/User";

export default function PreferenceTest() {
  const [foods, setFoods] = useState([]);
  const user = useSelector((store) => store.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleButtonClick() {
    const categories = new Set();
    foods.forEach((food) => {
      if (food.checked) {
        categories.add(food.category);
      }
    });
    if (categories.size === 0) {
      alert("한개 이상 선택하세요");
      return;
    }
    fetchApi("/api/users/category", "post", {
      categories: [...categories],
    }).then((res) => {
      if (res.status === 200) {
        dispatch(setLoggedin());
        history.replace("/");
      }
    });
  }

  function toggleCheck(i) {
    const newFoods = [...foods];
    newFoods[i].checked = !newFoods[i].checked;
    setFoods(newFoods);
  }

  function initFoods() {
    const foods = [];
    foods.push({
      title: "김치찌개",
      img: "images/foods/kimchi.jpg",
      selected: false,
      category: "한식",
    });
    foods.push({
      title: "백반",
      img: "images/foods/baekban.jpg",
      selected: false,
      category: "한식",
    });
    foods.push({
      title: "파스타",
      img: "images/foods/pasta.jpg",
      selected: false,
      category: "양식",
    });
    foods.push({
      title: "스테이크",
      img: "images/foods/steak.jpg",
      selected: false,
      category: "양식",
    });
    foods.push({
      title: "짜장면",
      img: "images/foods/jjajang.png",
      selected: false,
      category: "아시안/중국집",
    });
    foods.push({
      title: "쌀국수",
      img: "images/foods/ssalguksu.jpg",
      selected: false,
      category: "아시안/중국집",
    });
    foods.push({
      title: "마라탕",
      img: "images/foods/maratang.jpg",
      selected: false,
      category: "아시안/중국집",
    });
    foods.push({
      title: "떡볶이",
      img: "images/foods/ddukboki.jpg",
      selected: false,
      category: "분식",
    });
    foods.push({
      title: "라면",
      img: "images/foods/ramyun.jpg",
      selected: false,
      category: "분식",
    });
    foods.push({
      title: "치킨",
      img: "images/foods/chicken.jpg",
      selected: false,
      category: "치킨",
    });
    foods.push({
      title: "피자",
      img: "images/foods/pizza.jpg",
      selected: false,
      category: "피자",
    });
    foods.push({
      title: "회",
      img: "images/foods/hoi.jpg",
      selected: false,
      category: "일식",
    });
    foods.push({
      title: "초밥",
      img: "images/foods/chobab.jpg",
      selected: false,
      category: "일식",
    });
    foods.push({
      title: "타코야끼",
      img: "images/foods/tako.jpg",
      selected: false,
      category: "일식",
    });
    foods.push({
      title: "돈카츠",
      img: "images/foods/donkaz.png",
      selected: false,
      category: "일식",
    });
    foods.push({
      title: "삼겹살구이",
      img: "images/foods/samgyupsal.jpg",
      selected: false,
      category: "고기",
    });
    foods.push({
      title: "족발보쌈",
      img: "images/foods/jokbo.jpg",
      selected: false,
      category: "고기",
    });
    foods.push({
      title: "곱창",
      img: "images/foods/gobchang.jpg",
      selected: false,
      category: "고기",
    });
    foods.push({
      title: "햄버거",
      img: "images/foods/hambuk.jpg",
      selected: false,
      category: "패스트푸드",
    });
    foods.push({
      title: "샌드위치",
      img: "images/foods/sandw.jpg",
      selected: false,
      category: "패스트푸드",
    });

    setFoods(foods);
  }

  useEffect(() => {
    initFoods();
  }, []);
  return (
    <Container>
      <h1>좋아하는 음식을 골라주세요</h1>
      <h2>검사 결과는 향후 추천 서비스에 사용됩니다.</h2>
      <div className="foods">
        {foods.map((food, i) => (
          <div
            className={food.checked ? "food checked" : "food"}
            key={i}
            onClick={() => {
              toggleCheck(i);
            }}
          >
            <img src={food.img} alt="" srcset="" />
            {food.checked && (
              <span className="icon">
                <BsCheckCircle />
              </span>
            )}
          </div>
        ))}
      </div>
      <Button onClick={handleButtonClick}>확인</Button>
    </Container>
  );
}
