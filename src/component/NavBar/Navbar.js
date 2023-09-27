import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import "./NavBar.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NavLinkList } from "./List";

const Navbar = () => {
  const Links = NavLinkList;
  const location = useLocation().pathname;
  //the state is use for the switch between different nav bars when lander need the light and rest of the site need the dark theme text
  const [colorTheme, setColorTheme] = useState(""); // Initialize colorTheme state
  let ActiveClass = "";
  let isHome = true;
  let scroll = 50;

  if (location === "/") {
    isHome = true;
    scroll = 50;
  }

  let isScrolling = false;

  const Scroll = () => {
    if (!isScrolling) {
      isScrolling = true;

      requestAnimationFrame(() => {
        isScrolling = false;

        if (isHome && window.scrollY > scroll) {
          setColorTheme("dark text");
        } else if (isHome && window.scrollY <= scroll) {
          setColorTheme("light text");
        }
      });
    }
  };
  useEffect(() => {
    Scroll();
  });

  useEffect(() => {
    if (isHome) {
      window.addEventListener("scroll", Scroll);
    } else {
      setColorTheme("dark text");
    }

    return () => {
      if (isHome) {
        window.removeEventListener("scroll", Scroll);
      }
    };
    // eslint-disable-next-line
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      setColorTheme("dark text");
    }
  }, [location, colorTheme, isHome]);

  colorTheme === "light text"
    ? (ActiveClass = "light-text-mode")
    : (ActiveClass = "dark-text-mode  dark:text-white dark:bg-blue-950");

  return (
    <div className={`nav-area nav-area-${ActiveClass}`}>
      <div className="nav-area">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="navlinks expanded">
          {Links.map((link, id) => (
            <li key={`${link.title}-${id}`}>
              <NavLink className="link" to={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
