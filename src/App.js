import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

import Content from "./components/Content/Content";
import Nav from "./components/Nav/Nav";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav state={props.state.siteBar} />
      <Content
      store={props.store}
        state={props.state}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default App;
