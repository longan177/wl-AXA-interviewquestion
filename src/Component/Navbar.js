import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-center">
        <div className="logo">
          <img src="logo512.png" alt="logo"></img>
          AXA
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
