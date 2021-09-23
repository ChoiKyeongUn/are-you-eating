import {
  SET_BOOKLIST,
  SET_QUERY,
  DO_NOT_REFRESH,
  DO_REFRESH,
  SET_SCROLL,
  SET_LIKE_BOOKS,
  SET_LIKE_PAGE,
  SET_BOOK_DEALS,
  SET_BOOK_COMMENTS,
  SET_IS_LOADING,
} from "../../actions/Books";

const INIT_STATE = {
  query: "",
  bookList: [],
  needRefresh: true,
  scroll: 0,
  likeBooks: [],
  likeCurrentPage: 0,
  likeTotalPages: 0,
  likeTotalElements: 0,
  bookDeals: [],
  bookComments: [],
  isLoading: false,
};

export const bookReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.query,
      };
    case SET_BOOKLIST:
      return {
        ...state,
        bookList: action.bookList,
      };
    case DO_NOT_REFRESH:
      return {
        ...state,
        needRefresh: false,
      };
    case DO_REFRESH:
      return {
        INIT_STATE,
      };
    case SET_SCROLL:
      return {
        ...state,
        scroll: action.scroll,
      };
    case SET_LIKE_BOOKS:
      return {
        ...state,
        likeBooks:
          action.currentPage === 0
            ? [...action.books]
            : state.likeBooks.concat([...action.books]),
      };
    case SET_LIKE_PAGE:
      return {
        ...state,
        likeCurrentPage: action.currentPage,
        likeTotalPages: action.totalPages,
        likeTotalElements: action.totalElements,
      };
    case SET_BOOK_DEALS:
      return {
        ...state,
        bookDeals: action.bookDeals,
      };
    case SET_BOOK_COMMENTS:
      return {
        ...state,
        bookComments: action.bookComments,
      };

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
