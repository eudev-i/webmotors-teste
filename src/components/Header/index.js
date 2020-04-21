import React from "react";
import "./styles.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="imgLogo" alt="logo" />
    </header>
  );
}

export default Header;
