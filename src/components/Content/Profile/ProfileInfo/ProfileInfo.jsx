import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.imgBlock}> 
        <img className={classes.imgColor} src="https://labartisan.net/demo/turulav/turulav-dark/assets/images/bg.jpg"></img>
      </div>
      <div className={classes.descriptionBlock}>ava= discription</div>
    </div>
  );
};
export default ProfileInfo;
