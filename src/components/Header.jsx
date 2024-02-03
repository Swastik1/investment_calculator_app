import React from "react";
import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="A bag full of money" />
      <h1>Investment App</h1>
    </header>
  );
};

export default Header;
