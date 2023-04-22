import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
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
          <li className="mx-2">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
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
        <Link to="/">
          <span role="img" aria-label="boxing glove">🥊</span>
          Chop-Shop TKO
        </Link>
      </h1>

      <ul className="flex-row px-1">
        <li className="mx-1">
        <Link to="/Matchups">
          <span role="img" aria-label="">🤼 </span>
          Matchups
        </Link>
        </li>
        <li className="mx-1">
        <Link to="/Fighterstats">
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
