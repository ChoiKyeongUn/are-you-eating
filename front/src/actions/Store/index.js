import { fetchApi } from "../../api.js";

export const SEARCH_STORES = "SEARCH_STORES";
export const SET_STORES = "SET_STORES";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_SCROLL = "SET_SCROLL";
export const SET_SORT = "SET_SORT";
export const SET_SEARCH = "SET_SEARCH";

export const searchStores =
  (search = "", page = 0) =>
  async (dispatch, getState) => {
    dispatch(setIsLoading(true));
    if (page === 0) {
      dispatch(setStores([], []));
    }
    const ratingRes = await fetchApi(
      `/api/store/search?keyword=${search}&sort=rating&page=${page}&size=${10}`
    );
    const countRes = await fetchApi(
      `/api/store/search?keyword=${search}&sort=count&page=${page}&size=${10}`
    );
    const rating = await ratingRes.json();
    const count = await countRes.json();
    if (page === 0) {
      dispatch(setStores(rating, count));
    } else {
      const newRating = getState().storeReducer.rating.concat(rating);
      const newCount = getState().storeReducer.count.concat(count);
      dispatch(setStores(newRating, newCount));
    }
    dispatch(setIsLoading(false));
  };

export const setStores = (newRating, newCount) => {
  return {
    type: SET_STORES,
    stores: {
      rating: newRating,
      count: newCount,
    },
  };
};

export const setScroll = (scroll) => {
  return {
    type: SET_SCROLL,
    scroll: scroll,
  };
};

export const setIsLoading = (loading) => {
  return {
    type: SET_IS_LOADING,
    loading: loading,
  };
};

export const setSort = (sort) => {
  return {
    type: SET_SORT,
    sort: sort,
  };
};

export const setSearch = (search) => {
  return {
    type: SET_SEARCH,
    search: search,
  };
};
