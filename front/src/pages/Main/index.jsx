import { useEffect, useState } from "react";
import StoreItem from "../../components/StoreItem";
import { Container, StoreList, Wrapper } from "./style";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Main() {
  const [stores, setStores] = useState([]);
  const user = useSelector((store) => store.userReducer.user);
  const history = useHistory();

  function getStores() {
    fetch(`/api/recomm/3`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStores(data);
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

  return (
    <Container>
      <Wrapper>
        <h1>{user.id}님 취향 저격 맛집 추천</h1>
        <StoreList>
          {stores.map((store, i) => (
            <StoreItem store={store} key={i} />
          ))}
        </StoreList>
      </Wrapper>
    </Container>
  );
}
