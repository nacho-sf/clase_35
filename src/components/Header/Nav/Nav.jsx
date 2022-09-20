import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>;
    
  }
}

export default Nav
