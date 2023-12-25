import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>
        <div className={`${classes.dialog} ${classes.active}`}>Andrey</div>
        <div className={classes.item}>Roma</div>
        <div className={classes.item}>Sergey</div>
        <div className={classes.item}>Julia</div>
        <div className={classes.item}>Elisaveta</div>
      </div>

      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>Hi, how are you?</div>
        <div className={classes.message}>Hi,everyone !</div>
      </div>
    </div>
  );
};
export default Dialogs;
