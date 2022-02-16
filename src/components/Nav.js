import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <h3>Play Quiz</h3>
          </Link>
        </li>
      </ul>

      <Account />
    </nav>
  );
};

export default Nav;
