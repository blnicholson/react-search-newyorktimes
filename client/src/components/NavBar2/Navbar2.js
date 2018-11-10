import React from "react";
import {Link} from "react-router-dom";
 

const NavBar2 = () => (
  <nav className="navbar">
    <a className="navbar-brand" href="/">
      <img id="nav" src="" width="30" height="30" alt="" />
      NYT Search
    </a>
    <form className="form-inline">
    <Link to = "/articles">
      <button className="btn btn-outline-warning">
        Search Articles
      </button>
      </Link>
    </form>
  </nav>
);

export default NavBar2;