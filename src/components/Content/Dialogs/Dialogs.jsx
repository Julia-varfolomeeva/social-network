import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";




const Dialogs = (props) => {


let dialogsElement = props.state.dialogs.map(dialog => <DialogItem  name={dialog.name} imageItem={dialog.imageItem} id={dialog.id} />);

let messagesElement = props.state.messages.map(message => <Message message={message.message} id={message.id} />);
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>{dialogsElement}</div>

      <div className={classes.messages}>{messagesElement}</div>
    </div>
  );
};
export default Dialogs;
