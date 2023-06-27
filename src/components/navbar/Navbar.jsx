import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-logo">
            <img
              src="https://my.p24.app/files/52a3e2cd-dac5-4d00-b296-3c84d33a4377.svg"
              alt="logo"
            />
          </div>
          <div className="navbar-right">
            <a className="navbar-a"> Сеансы</a>
            <a className="navbar-a"> Афиша</a>
            <a className="navbar-a"> О нас</a>
            <a className="navbar-a"> 0500 000 005</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
