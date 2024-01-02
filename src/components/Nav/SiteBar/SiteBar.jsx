import React from "react";
import classes from "./SiteBar.module.css";
import { NavLink } from "react-router-dom";

const SiteBar = (props) => {

  let dialogsElement = props.state.dialogs.map(dialog => <div>{dialog.name} {dialog.imageItem}</div> );
  
  return (
    <nav className={classes.siteBar}>
      <h4>Friends</h4>
      <div className={classes.items}>
      {dialogsElement}






        {/* <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
        >
          {/*  определяет, какой класс применять. Функция получает объект с информацией о том, активен ли текущий маршрут. Если isActive равно true, применяется класс s.activeLink, в противном случае применяется пустая строка (ничего). */}
          {/* Profile
        </NavLink> */}
      </div>
      

    
    </nav>
  );
};
export default SiteBar;
