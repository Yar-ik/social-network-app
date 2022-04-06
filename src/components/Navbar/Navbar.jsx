/** @format */

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="item">
        <Link to="profile">Profile</Link>
      </div>
      <div className="item">
        <Link to="dialogs">Messages</Link>
      </div>
      <div className="item">
        <Link to="users">Users</Link>
      </div>
      <div className="item">
        <Link to="news">News</Link>
      </div>
      <div className="item">
        <Link to="music">Music</Link>
      </div>
      <div className="item">
        <Link to="settings">Settings</Link>
      </div>
    </nav>
  );
};

export default Nav;
