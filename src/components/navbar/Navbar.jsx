import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="main-navbar">
          <div className="logo">
            <img
              src="https://my.p24.app/files/52a3e2cd-dac5-4d00-b296-3c84d33a4377.svg"
              alt="logo"
            />
          </div>
          <ul className="navbar-menu">
            <li>Сеансы</li>
            <li>Афиша</li>
            <li>О нас</li>
            <li>0500 000 005</li>
          </ul>
        </div>
        <div className="navbar-bord"></div>
      </div>
    </>
  );
};

export default Navbar;
