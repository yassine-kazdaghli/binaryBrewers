import React from 'react';
import "../logo/logo.css";
import LogoWithText from "../logo/logoWithTextBinaryBrewers2.png"

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoWithText} alt="logo" />
    </div>
  );
};

export default Logo;