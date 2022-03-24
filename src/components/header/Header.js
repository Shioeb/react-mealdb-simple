import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="brand">MealDB</div>
      <div className="links">
        <a href="/home">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}

export default Header;
