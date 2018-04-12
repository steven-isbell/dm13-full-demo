import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import userReducer from "./ducks/userReducer";
import productReducer from "./ducks/productReducer";

const store = createStore(
  combineReducers({
    userReducer,
    productReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
