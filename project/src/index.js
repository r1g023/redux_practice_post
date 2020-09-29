import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { playerReducer } from "./reducers/reducers";

const store = createStore(playerReducer, applyMiddleware(thunk));
console.log(store.getState(), "CreateStore here");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
