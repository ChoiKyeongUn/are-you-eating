import { LOGIN, LOGOUT, SET_LOGGEDIN } from "../../actions/User";

const INIT_STATE = {
  user: {},
};

export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
      };
    case SET_LOGGEDIN:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedin: true,
        },
      };
    default:
      return state;
  }
};
