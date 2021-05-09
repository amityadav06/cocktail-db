import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img className="logo" src={logo} alt="cocktail logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <button onClick={toggleTheme} className="btn">
          theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
