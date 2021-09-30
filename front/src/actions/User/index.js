export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

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
