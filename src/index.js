import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/redux-store";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  
  root.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>
  );
};
rerenderEntireTree(store.getState());

store.subscribe(()=>{
  let state = store.getState()
  rerenderEntireTree(state)});
