import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducer/index";
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

export const store = createStore(
  reducers,
  compose(applyMiddleware(...middlewares)),

);

