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
        <div className={`nav-menu ${showMenu ? "show-menu" : ""}`} id="navMenu">
          <ul className="scroll flex flex-col gap-5">
            {props.cart.map((item, index) => (
              <li
                key={index}
                className="h-[124px] w-full bg-[#D8DBE2] flex p-3 rounded-2xl"
              >
                <div>
                  <img
                    src={
                      new URL(`../../assets/image/${item.img}`, import.meta.url)
                        .href
                    }
                    alt={item.name}
                    className="h-[100px]"
                  />
                </div>
                <div className="calc px-4 flex flex-col justify-around">
                  <div className="flex justify-between">
                    <p className="font-[garuteBold] text-lg text-[#1B1B1E]">
                      {item.name}
                    </p>
                    <p
                      onClick={() => props.onRemove(index)}
                      className="text-lg text-[#1B1B1E] cursor-pointer"
                    >
                      <i class="fa-solid fa-xmark"></i>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-[garuteRegular] text-base text-[#58A4B0]">
                      x{item.quantity}
                    </p>
                    <p className="font-[garuteRegular] text-base text-[#373F51]">
                      {item.price}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
