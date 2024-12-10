import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
// import { useClickAway }  from 'react-use';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? css.active : "");

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className={css.navigation}>
        <a href="#">
          <svg
            id="logo-15"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
              className="ccustom"
              fill="#17cf97"
            ></path>{" "}
            <path
              d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
              className="ccustom"
              fill="#17cf97"
            ></path>{" "}
            <path
              d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
              className="ccustom"
              fill="#17cf97"
            ></path>{" "}
            <path
              d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
              className="ccustom"
              fill="#17cf97"
            ></path>{" "}
          </svg>
        </a>
        <div>
          <ul className={clsx(css.navbar, isMenuOpen && css.opened)}>
            <li>
              <NavLink className={clsx(css.link, isActive("/"))} to="/">
                Home
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink
                    className={clsx(css.link, isActive("/contacts"))}
                    to="/contacts"
                  >
                    Contacts
                  </NavLink>
                </li>
                <li>
                  <UserMenu />
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className={clsx(css.link, isActive("/register"))}
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={clsx(css.link, isActive("/login"))}
                    to="/login"
                  >
                    Log In
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className={css.mobile}>
          <Hamburger
            color="white"
            toggle={handleMenuToggle}
            toggled={isMenuOpen}
          />
        </div>
      </nav>
    </header>
  );
};

//  <header className={`${css.header} ${isMenuOpen ? css.open : ""}`}>
//    <div className={css.navWrapper}>
//      <Logo>Connected Value</Logo>
//      {isMobile && <Hamburger isOpen={isMenuOpen} toggle={handleMenuToggle} />}
//    </div>
//    {/* Бургер-меню отображается только на мобильных устройствах */}
//    <AnimatePresence>
//      {isMenuOpen && isMobile && (
//        <motion.nav
//          className={css.burgerMenu}
//          initial={{
//            y: "-100%",
//            opacity: 0,
//            borderBottom: "1px solid transparent",
//          }}
//          animate={{ y: 0, opacity: 1, borderBottom: "1px solid black" }}
//          exit={{
//            y: "-100%",
//            opacity: 0,
//            borderBottom: "1px solid transparent",
//          }}
//          transition={{ duration: 0.5 }}
//        >
//          <Navigation />
//          {isLoggedIn ? <UserMenu /> : <AuthNav />}
//          <SocialLinks />
//        </motion.nav>
//      )}
//    </AnimatePresence>
//  </header>;
