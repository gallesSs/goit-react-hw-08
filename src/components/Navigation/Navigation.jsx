import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";
import PageTitle from "../PageTitle/PageTitle";
import phone from "../../../public/flat-color-icons_phone.svg"

const makeLinksClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navNavigation}>
      <div className={css.composition}>
        <img className={css.image} src={phone} alt="phone" />
        <PageTitle>Phonebook</PageTitle>
      </div>
      <div className={css.navigation}>
        <NavLink className={makeLinksClass} to="/">
          <span className={css.accent}>Home</span>
        </NavLink>
        {isLoggedIn && (
          <NavLink className={makeLinksClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;