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
    if (countRes.status === 200) {
      const rating = await ratingRes.json();
      const count = await countRes.json();
      if (page === 0) {
        dispatch(setStores(rating, count));
      } else {
        const newRating = getState().storeReducer.rating.concat(rating);
        const newCount = getState().storeReducer.count.concat(count);
        dispatch(setStores(newRating, newCount));
      }
    } else {
      dispatch(setStores([], []));
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

export const addReview = (storeId) => (dispatch, getState) => {
  const newRating = [...getState().storeReducer.rating];
  const newCount = [...getState().storeReducer.count];

  for (let i = 0; i < newRating.length; i++) {
    if (newRating[i].storeId === parseInt(storeId)) {
      newRating[i].reviews.push("review");
      break;
    }
  }
  for (let i = 0; i < newCount.length; i++) {
    if (newCount[i].storeId === parseInt(storeId)) {
      newCount[i].reviews.push("review");
      break;
    }
  }
  dispatch(setStores(newRating, newCount));
};
export const deleteReview = (storeId) => (dispatch, getState) => {
  const newRating = [...getState().storeReducer.rating];
  const newCount = [...getState().storeReducer.count];

  for (let i = 0; i < newRating.length; i++) {
    if (newRating[i].storeId === parseInt(storeId)) {
      newRating[i].reviews.pop();
      break;
    }
  }
  for (let i = 0; i < newCount.length; i++) {
    if (newCount[i].storeId === parseInt(storeId)) {
      newCount[i].reviews.pop();
      break;
    }
  }
  dispatch(setStores(newRating, newCount));
};
