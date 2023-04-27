import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link, useLocation } from "react-router-dom";
import './nav.css';

function Nav() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className={`mx-1 ${activeTab === "profile" ? "navActive" : ""}`}>
            <Link to="/profile" onClick={() => handleTabClick("/profile")}>
              Profile
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className={`mx-2 ${activeTab === "/signup" ? "navActive" : ""}`}>
            <Link to="/signup" onClick={() => handleTabClick("/signup")}>
              Signup
            </Link>
          </li>
          <li className={`mx-1 ${activeTab === "/login" ? "navActive" : ""}`}>
            <Link to="/login" onClick={() => handleTabClick("/login")}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
      <li className={`mx-1 ${activeTab === "/" ? "navActive" : ""}`}>
          <Link to="/" onClick={() => handleTabClick("/")}>
            <span role="img" aria-label="boxing glove">🥊</span>
            Chop-Shop TKO
          </Link>
        </li>
      </h1>

      <ul className="flex-row px-1">
        <li className={`mx-1 ${activeTab === "/Matchups" ? "navActive" : ""}`}>
          <Link to="/Matchups" onClick={() => handleTabClick("/Matchups")}>
            <span role="img" aria-label="">🤼 </span>
            Matchups  
          </Link>
        </li>
        <li className={`mx-1 ${activeTab === "/Fighterstats" ? "navActive" : ""}`}>
          <Link to="/Fighterstats" onClick={() => handleTabClick("/Fighterstats")}>
            <span role="img" aria-label="">🥋 </span>
            Fighter Stats
          </Link>
        </li>
      </ul>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
