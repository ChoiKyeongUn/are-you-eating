import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Score } from "../../components/Score";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import {
  Container,
  MapContainer,
  Spinner,
  SpinnerContainer,
  Store,
  StoreList,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  searchStores,
  setScroll,
  setSearch,
  setSort,
} from "../../actions/Store";

export default function Search() {
  const sort = useSelector((state) => state.storeReducer.sort);
  const rating = useSelector((state) => state.storeReducer.rating);
  const count = useSelector((state) => state.storeReducer.count);
  const isLoading = useSelector((state) => state.storeReducer.isLoading);
  const scroll = useSelector((state) => state.storeReducer.scroll);
  const search = useSelector((state) => state.storeReducer.search);
  const [center, setCenter] = useState({
    lat: 36.354823,
    lng: 127.298343,
  });
  const storeListRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  function handleScroll(e) {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (isLoading) return;
    dispatch(setScroll(scrollTop));
    if (
      parseInt(scrollTop) + parseInt(clientHeight) <
        parseInt(scrollHeight) - 1 ||
      parseInt(scrollTop) + parseInt(clientHeight) > parseInt(scrollHeight) + 1
    )
      return;
    getNextStores();
  }

  function getNextStores() {
    const keyword = history.location.state.keyword;
    if (rating && rating.length % 10 != 0) return;
    const page = parseInt(rating.length / 10);
    dispatch(searchStores(keyword, page));
  }

  function getSelectedStores() {
    if (sort === "rating") return rating;
    else return count;
  }

  function getTags(categories) {
    if (!categories) return "";
    const tags = categories.map((c) => `#${c.name}`).join(" ");
    return tags;
  }

  function getStore() {
    const keyword = history.location.state.keyword;
    dispatch(searchStores(keyword, 0));
  }

  function handleMouseEnter(e, store) {
    setCenter({ lat: store.latitude, lng: store.longitude });
  }

  useEffect(() => {
    const keyword = history.location.state.keyword;
    if (keyword !== search) {
      getStore();
      dispatch(setSearch(keyword));
    } else {
      storeListRef.current.scrollTo(0, scroll);
    }
  }, [history.location.state.keyword]);

  return (
    <Container>
      <StoreList>
        <div className="filters">
          <button
            className={sort === "rating" ? "filter selected" : "filter"}
            onClick={() => {
              dispatch(setSort("rating"));
            }}
          >
            평점순
          </button>
          <button
            className={sort === "count" ? "filter selected" : "filter"}
            onClick={() => {
              dispatch(setSort("count"));
            }}
          >
            리뷰 많은순
          </button>
        </div>
        <div className="stores" onScroll={handleScroll} ref={storeListRef}>
          {getSelectedStores().map((store, i) => (
            <Store
              key={i}
              onClick={() => {
                history.push(`/store/${store.storeId}`);
              }}
              onMouseEnter={(e) => {
                handleMouseEnter(e, store);
              }}
            >
              <div className="image">
                <img
                  src={store.imgUrl ? store.imgUrl : ""}
                  alt=""
                  onError={(e) => {
                    e.target.src = "/images/default_store.png";
                  }}
                />
              </div>
              <div className="info">
                <div className="name">{store.name}</div>
                <div className="category">{getTags(store.storeCategories)}</div>
                <div className="score">
                  <Score score={store.score} size={14} />
                </div>
                <div className="review">{`리뷰 수 : ${store.reviews?.length}개`}</div>
                <div className="address">{store.address}</div>
              </div>
            </Store>
          ))}
          {isLoading ? (
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          ) : (
            ""
          )}
        </div>
      </StoreList>
      <MapContainer>
        <Map
          center={center}
          style={{ width: "100%", height: "100%" }}
          level={8}
        >
          {rating.map((store) => (
            <MapMarker
              position={{ lat: store.latitude, lng: store.longitude }}
              key={store.storeId}
              title={store.address}
            >
              <div style={{ color: "#000" }}>{store.name}</div>
            </MapMarker>
          ))}
          {count.map((store) => (
            <MapMarker
              position={{ lat: store.latitude, lng: store.longitude }}
              key={store.storeId}
              title={store.address}
            >
              <div style={{ color: "#000", width: "40px" }}>{store.name}</div>
            </MapMarker>
          ))}
        </Map>
      </MapContainer>
    </Container>
  );
}
