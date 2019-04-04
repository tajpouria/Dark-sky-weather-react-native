import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

export default ({ children }) => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return <Provider store={store}>{children}</Provider>;
};
