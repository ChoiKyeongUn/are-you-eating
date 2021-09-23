import ReduxThunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";

import { bookReducer } from "../reducers/Books";

const rootReducer = combineReducers({
  // bookReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export default store;
