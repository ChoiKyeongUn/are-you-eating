import {
  SEARCH_STORES,
  SET_IS_LOADING,
  SET_SCROLL,
  SET_SEARCH,
  SET_SORT,
  SET_STORES,
} from "../../actions/Store";

const INIT_STATE = {
  search: "",
  sort: "rating",
  isLoading: false,
  rating: [],
  count: [],
  scroll: 0,
};

export const storeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_STORES:
      return {
        ...state,
        rating: action.stores.rating,
        count: action.stores.count,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.loading,
      };

    case SET_SCROLL:
      return {
        ...state,
        scroll: action.scroll,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.sort,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
};
