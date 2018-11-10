import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <Link to ="/">
    <a className="navbar-brand">
      <img id="nav" src="" width="30" height="30" alt="" />
      NYT Search
    </a>
    </Link>
    <form className="form-inline">
      <Link to="/savedArticles">
      <button className="btn btn-outline-warning">
       Saved Articles
      </button>
      </Link>
        
    </form>
  </nav>
);

export default NavBar;
