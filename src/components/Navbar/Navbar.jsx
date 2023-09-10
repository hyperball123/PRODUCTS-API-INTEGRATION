import React from "react";
import "./Navbar.css";

function Navbar() {
  
  return (
    <div className="Navbar-section">
      <div className="Navbar-container">
        <h1 className="Nav-h1">E-commerce Store 🛒</h1>
        <div className="nav-search">
          {/* <input type="search" name="Search" className="Nav-Search" /> */}
        </div>
        <ul className="Nav-ul">
          <li>
            <a href="#!">Country⬇️</a>
          </li>
          <li>
            <a href="#!" >
              Sign up
            </a>
          </li>
          <li>
            <a href="#!">Cart 🛒</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
