import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

import { BrowserRouter} from "react-router-dom";

import Content from "./components/Content/Content";
import Nav from "./components/Nav/Nav";

const App = (props) => {
 

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Content state={props.state}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
