import React from "react";
import "./Content.css";

import Dialogs from "./Dialogs/Dialogs";
import Settings from "./Settings/Settings";
import { Route, Routes } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Profile from "./Profile/Profile";
import DialogsContainer from "./Dialogs/Dialogs Container";

const Content = (props) => {
  return (
    <div className="app-wrapper-content">
      <Routes>
        <Route
          path="/profile/*"
          element={
            <Profile
   
              store={props.store}
            />
          }
        />
        <Route
          path="/dialogs/*"
          element={
            <DialogsContainer
            store={props.store}
            />
          }
        />
        <Route path="/news/*" element={<News />} />
        <Route path="/music/*" element={<Music />} />
        <Route path="/settings/*" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Content;
