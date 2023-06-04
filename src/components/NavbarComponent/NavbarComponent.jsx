import React from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";
import DownloadFunctions from "../../functions/project";
import AuthFunction from "../../functions/auth";
const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Backend</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/addnewbackend">Create New</Link>
        </li>
        <li>
          <Link to="/viewallprojects">View All</Link>
        </li>
        <li>
          <Link onClick={(e)=>{DownloadFunctions.DownloadLastProject(e)}}>Download Last</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link onClick={(e)=>{AuthFunction.LogoutFunction(e)}}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
