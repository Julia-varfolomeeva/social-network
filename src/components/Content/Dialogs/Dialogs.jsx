import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/state";

const Dialogs = (props) => {
  let newMessageElement = React.createRef(); //1

  let sendMessage = () => {
    //3
    // let newMessage = newMessageElement.current.value; //4
    props.dispatch(addMessageActionCreator());
  }; //5

  let onMessageChange = () => {
    let message = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(message));
  };
  let Clear = () => {
    newMessageElement.current.value = "";
  };

  let dialogsElement = props.dialogPage.dialogs.map((dialog) => (
    <DialogItem
      name={dialog.name}
      imageItem={dialog.imageItem}
      id={dialog.id}
    />
  ));

  let messagesElement = props.dialogPage.messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>{dialogsElement}</div>

      <div className={classes.messages}>{messagesElement}</div>

      <div className={classes.textArea}>
        <textarea
          onClick={Clear}
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.dialogPage.newMessageText}
        ></textarea>
        {/* 2 */}
        <button onClick={sendMessage}> Send</button>
        {/* между 2 и 3 */}
      </div>
    </div>
  );
};
export default Dialogs;
