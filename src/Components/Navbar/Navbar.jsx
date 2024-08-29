import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import img from "../../assets/logo.png";

const Navbar = ({ setShowLogin }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="navbar">
      <div className="nav_items">
        <div className="logo">
          <img src={img} alt="JewelGems Logo" />
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <h1>Symplify</h1>
          </Link>
        </div>
        <div className="menu-icons" onClick={() => setClicked((prev) => !prev)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className={`nav_main ${clicked ? "ulactive" : ""}`}>
          <ul className={clicked ? "ulactive" : ""}>
            <li
              className={activeItem === 0 ? "active" : ""}
              onClick={() => handleItemClick(0)}
            >
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li
              className={activeItem === 1 ? "active" : ""}
              onClick={() => handleItemClick(1)}
            >
              Why Symplify
              <i className="fa-solid fa-angle-down"></i>
            </li>
            <li
              className={activeItem === 2 ? "active" : ""}
              onClick={() => handleItemClick(2)}
            >
              Customers
              <i className="fa-solid fa-angle-down"></i>
            </li>

            <li
              className={activeItem === 5 ? "active" : ""}
              onClick={() => handleItemClick(5)}
            >
              About Us
            </li>
          </ul>
        </div>
        <div className="nav_side">
          <button className="demo_request">Request a Demo</button>
          <button className="demo_request" onClick={() => setShowLogin(true)}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
