// import { requestGet } from "../../api.js";
export const SET_QUERY = "SET_QUERY";
export const RESET_BOOKLIST = "RESET_BOOKLIST";
export const SET_BOOKLIST = "SET_BOOKLIST";
export const DO_NOT_REFRESH = "DO_NOT_REFRESH";
export const DO_REFRESH = "DO_REFRESH";
export const SET_SCROLL = "SET_SCROLL";
export const SET_LIKE_BOOKS = "SET_LIKE_BOOKS";
export const SET_LIKE_PAGE = "SET_LIKE_PAGE";
export const SET_BOOK_DEALS = "SET_BOOK_DEALS";
export const SET_BOOK_COMMENTS = "SET_BOOK_COMMENTS";
export const SET_IS_LOADING = "SET_IS_LOADING";

export const setBookList = (bookList) => {
  return {
    type: SET_BOOKLIST,
    bookList,
  };
};

export const setQuery = (query) => {
  return {
    type: SET_QUERY,
    query,
  };
};

export const doNotRefresh = () => {
  return {
    type: DO_NOT_REFRESH,
  };
};

export const doRefresh = () => {
  return {
    type: DO_REFRESH,
  };
};

export const setScroll = (scroll) => {
  return {
    type: SET_SCROLL,
    scroll: scroll,
  };
};

// export const getLikeBooks = (params) => {
//   return (dispatch) => {
//     const response = requestGet("/like-books", params);
//     response.then((res) => {
//       const currentPage = res.page.currentPage;
//       const totalPages = res.page.totalPages;
//       const totalElements = res.page.totalElements;
//       dispatch(setLikePage(currentPage, totalPages, totalElements));
//       dispatch(setLikeBooks(res.result, currentPage));
//     });
//   };
// };

export const setLikeBooks = (books, currentPage) => {
  return {
    type: SET_LIKE_BOOKS,
    books,
    currentPage,
  };
};

export const setLikePage = (currentPage, totalPages, totalElements) => {
  return {
    type: SET_LIKE_PAGE,
    currentPage,
    totalPages,
    totalElements,
  };
};

// export const getBookDeals =
//   (bookId, areaId, page = 0) =>
//   async (dispatch, getState) => {
//     const params = {
//       bookId: bookId,
//       areaId: areaId,
//       page: page,
//       size: 10,
//       filter: "NEW",
//     };
//     const { result } = await requestGet(`/deals`, params);
//     if (page === 0) {
//       dispatch(setBookDeals(result));
//     } else {
//       const newBookDeals = getState().bookReducer.bookDeals.concat(result);
//       dispatch(setBookDeals(newBookDeals));
//     }
//   };

export const setBookDeals = (bookDeals) => {
  return {
    type: SET_BOOK_DEALS,
    bookDeals,
  };
};

// export const getBookComments =
//   (bookId, page = 0) =>
//   async (dispatch, getState) => {
//     const { result } = await requestGet("/comments", {
//       bookId: bookId,
//       page: page,
//       size: 5,
//     });
//     if (page === 0) {
//       dispatch(setBookComments(result));
//     } else {
//       const newBookComments =
//         getState().bookReducer.bookComments.concat(result);
//       dispatch(setBookComments(newBookComments));
//     }
//   };

export const setBookComments = (bookComments) => {
  return {
    type: SET_BOOK_COMMENTS,
    bookComments,
  };
};

export const setIsLoading = (isLoading) => {
  return {
    type: SET_IS_LOADING,
    isLoading: isLoading,
  };
};
