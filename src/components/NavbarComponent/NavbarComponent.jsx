import React from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/addnewbackend">Create New</Link>
        </li>
        <li>
          <Link to="/viewallbackends">View All</Link>
        </li>
        <li>
          <Link to="/downloadlastbackend">Download Last</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
