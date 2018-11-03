import React from "react";

import "./Navbar.css";

const NavBar = () =>(
    <nav className="navbar">
    <a className="navbar-brand" href="/">
      <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
      NYT Search
    </a>
    <form className="form-inline">
    <button className="btn"><a href="/savedArticles">Saved Articles</a></button>  
 </form>
  </nav>
);

export default NavBar;