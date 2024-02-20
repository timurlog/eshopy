import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import bape from "../../assets/image/bape-logo.png";
// import BasketCards from "../BasketCards/BasketCards";

export default function Navbar(props) {
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

          <ul className="p-5 rounded-lg">
            {props.cart.map((item, index) => (
              <li key={index} className="flex justify-between gap-2 items-center  p-3 rounded-md bg-gray-200 mb-2">
                <div><img src={new URL(`../../assets/image/${item.img}`, import.meta.url).href} alt={item.name} className="w-16 h-16 mr-4 bg-white" /></div>
                <span className=" text-[#58A4B0] text-sm">{item.name} - <span className=" font-bold text-[0.8rem]">{item.price}</span></span>
                <span className="text-sm text-[#373F51]">x{item.quantity}</span>
                <button onClick={() => props.onRemove(index)} className="text-[0.5rem] text-black border-[0.5px] rounded-2xl px-1 mt-[-3rem] flex justify-center border-black hover:text-white hover:bg-black">&times;</button>
              </li>
            ))}
          </ul>
          
        </div>
      </nav>
    </header>
  );
}
