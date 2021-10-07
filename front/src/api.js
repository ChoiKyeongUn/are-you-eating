export const fetchApi = (uri, method, body) => {
  const url = "http://54.180.160.233:8080";
  const token = JSON.parse(localStorage.getItem("loginUser"))?.token;

  return fetch(`${url}${uri}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify(body),
  });
};

export const fetchImages = (store, size = 1) => {
  const query = store.area ? `${store.area} ${store.name}` : store.name;
  const url = `https://dapi.kakao.com/v2/search/image?query=${query}&size=${size}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "KakaoAK 781ed2f07eb684a67bab44bffdcf861b",
    },
  });
};
