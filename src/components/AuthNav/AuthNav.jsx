import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const makeLinksClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

const AuthNav = () => {
  return (
    <div className={css.navAuth}>
      <NavLink className={makeLinksClass} to="/register">
        Register
      </NavLink>
      <NavLink className={makeLinksClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;