import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Layout.module.css";

const buildLinkClass = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <div className={css.navBox}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
            </NavLink>
          </div>
          <div className={css.navBox}>
            <NavLink to="/register" className={buildLinkClass}>
              Register
            </NavLink>
            <NavLink to="/login" className={buildLinkClass}>
              Log In
            </NavLink>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
