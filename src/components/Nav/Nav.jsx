import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import SiteBar from "./SiteBar/SiteBar";

const Nav = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
        >
          {/*  определяет, какой класс применять. Функция получает объект с информацией о том, активен ли текущий маршрут. Если isActive равно true, применяется класс s.activeLink, в противном случае применяется пустая строка (ничего). */}
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
        >
          Massages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
        >
          Setting
        </NavLink>
      </div>

      <SiteBar state={props.state}/>
    </nav>
  );
};
export default Nav;
