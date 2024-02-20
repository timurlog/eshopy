import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import bape from "../../assets/image/bape-logo.png";
// import BasketCards from "../BasketCards/BasketCards";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const toggle = () => setShowMenu((prev) => !prev);
    document.getElementById("navToggle").addEventListener("click", toggle);

    return () =>
      document.getElementById("navToggle").removeEventListener("click", toggle);
  }, []);

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-data">
          <a href="">
            <img className="nav-logo" src={bape} alt="bapelogo logo" />
            <p className="nav-name">ESHOPY</p>
          </a>
        </div>
        <div
          className={`nav-toggle ${showMenu ? "show-icon" : ""}`}
          id="navToggle"
        >
          <i className="fa-solid fa-cart-shopping nav-burger"></i>
          <i className="fa-solid fa-xmark nav-close"></i>
        </div>
        <div
          className={`nav-menu ${showMenu ? "show-menu" : ""}`}
          id="navMenu"
        >
          
        </div>
      </nav>
    </header>
  );
}
