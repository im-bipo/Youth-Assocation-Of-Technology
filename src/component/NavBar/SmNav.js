import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./SmNav.css";

function SmNav() {
  const toggleNav = () => {
    const NavBox = document.getElementById("NavBox");

    if (NavBox.classList.contains("flex")) {
      NavBox.classList.remove("flex");
      NavBox.classList.add("hidden");
    } else {
      NavBox.classList.remove("hidden");
      NavBox.classList.add("flex");
    }
  };
  useEffect(() => {
    const NavBox = document.getElementById("NavBox");
    NavBox.classList.remove("flex");
    NavBox.classList.add("hidden");
  }, []);
  return (
    <>
      <div
        id="NavBox"
        className="flex flex-col items-center top-0 duration-1000 fixed h-[100%] w-[100%] z-[1000] bg-gray-200 text-primary font-bold pt-20"
      >
        <div
          onClick={toggleNav}
          className=" cursor-pointer absolute right-0 p-5 top-0"
        >
          <span className="inline-block w-7 h-[2px] bg-black absolute right-5 top-10 rotate-45"></span>
          <span className="inline-block w-7 h-[2px] bg-black -rotate-45"></span>
        </div>
        <Link onClick={toggleNav} to="/" className="py-3 my-10 border-primary border-b-2 ">
          Home
        </Link>
        <Link
          onClick={toggleNav}
          to="/about"
          className="py-3 my-10 border-primary border-b-2 "
        >
          About
        </Link>
        <Link
          onClick={toggleNav}
          to="/projects"
          className="py-3 my-10 border-primary border-b-2 "
        >
          Project
        </Link>
        <Link
          onClick={toggleNav}
          to="/events"
          className="py-3 my-10 border-primary border-b-2 "
        >
          Events
        </Link>
      </div>

      <div className="SmNav bottom-0 w-[100%] fixed flex items-center justify-center space-x-[20%] bg-gray-200 h-14 z-10">
        <NavLink
          to="/events"
          className="flex flex-col justify-center p-3 rounded-[50%]"
        >
          <i className="fa-solid rounded-full w-5 scale-125 fa-calendar-days"></i>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col justify-center p-3 rounded-[50%]"
        >
          <i className="fa-solid rounded-full w-5 scale-125 fa-home"></i>
        </NavLink>
        <div
          onClick={toggleNav}
          to="/projects"
          className="flex flex-col justify-center p-3 rounded-[50%]"
        >
          <i className="fa-solid rounded-full w-5 scale-125 fa-bars"></i>
        </div>
      </div>
    </>
  );
}

export default SmNav;
