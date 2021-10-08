import { useEffect, useState } from "react";
import StoreItem from "../../components/StoreItem";
import { Container, StoreList, Wrapper } from "./style";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchImages, getStoreImage } from "../../api";

export default function Main() {
  const [stores, setStores] = useState([]);
  const user = useSelector((store) => store.userReducer.user);
  const history = useHistory();

  async function addImageToStores() {
    if (stores.length < 1) return;
    if (stores[0].imgUrl) return;
    const newStores = [...stores];
    for (let i = 0; i < newStores.length; i++) {
      const res = await fetchImages(newStores[i], 30);
      if (res.status === 200) {
        const data = await res.json();
        const images = data?.documents
          .map((item) => item.image_url)
          .filter(
            (img) => !img.includes("postfiles") && !img.includes("naver")
          );
        newStores[i].imgUrl = images.length > 0 ? images[0] : "none";
      }
    }
    setStores(newStores);
  }

  function getStores() {
    fetch(`/recomm/${user.userId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setStores(data);
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (!user.isLoggedin) {
      history.replace("/test");
    }
  }, [user]);

  useEffect(() => {
    getStores();
  }, []);

  useEffect(() => {
    addImageToStores();
  }, [stores]);

  return (
    <Container>
      <Wrapper>
        <h1>{user.nickname}님 취향 저격 맛집 추천</h1>
        <StoreList>
          {stores.map((store, i) => (
            <StoreItem store={store} key={i} />
          ))}
        </StoreList>
      </Wrapper>
    </Container>
  );
}
