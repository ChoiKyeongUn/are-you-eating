export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_LOGGEDIN = "SET_LOGGEDIN";

export const login = (user) => {
  localStorage.setItem("loginUser", JSON.stringify(user));
  return {
    type: LOGIN,
    user,
  };
};
export const logout = () => {
  localStorage.removeItem("loginUser");
  return {
    type: LOGOUT,
  };
};

export const setLoggedin = () => {
  const newLoginUser = JSON.parse(localStorage.getItem("loginUser"));
  newLoginUser.isLoggedin = true;
  return {
    type: SET_LOGGEDIN,
  };
};
