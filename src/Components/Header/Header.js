import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const handelInput = (event) => {
  let inputValue = event?.target?.value;
  return inputValue;
};

const Header = () => {
  return (
    <nav className="link-container">
      <h2 className="logo">News 420</h2>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/Countries"
        >
          Countries
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/news"
        >
          News
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/contact"
        >
          Contact
        </NavLink>
        <input
          onChange={handelInput}
          placeholder="search"
          className="input"
          type="text"
        />
      </div>
    </nav>
  );
};

export { Header, handelInput };
