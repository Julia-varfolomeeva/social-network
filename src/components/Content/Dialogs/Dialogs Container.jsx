import React from "react";

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPage;
  

  let sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (message) => {
    props.store.dispatch(updateNewMessageTextActionCreator(message));
  };

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateNewMessageText={onMessageChange}
      dialogs={state.dialogs}
      messages={state.messages}
      newMessageText={state.newMessageText}
    />
  );
};
export default DialogsContainer;
