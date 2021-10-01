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
