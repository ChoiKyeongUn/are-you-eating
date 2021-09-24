import { useEffect, useState } from "react";
import { Container } from "./style";
import { BsCheckCircle } from "react-icons/bs";

export default function PreferenceTest() {
  const [foods, setFoods] = useState([]);

  function toggleCheck(i) {
    const newFoods = [...foods];
    newFoods[i].checked = !newFoods[i].checked;
    setFoods(newFoods);
  }

  useEffect(() => {
    const foods = [];
    for (let i = 0; i < 20; i++) {
      foods.push({
        title: `음식${i}`,
        img: `https://picsum.photos/250/${250 + i}`,
        selected: false,
      });
    }
    setFoods(foods);
  }, []);
  return (
    <Container>
      <h1>좋아하는 음식 4개를 골라주세요</h1>
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
    </Container>
  );
}
