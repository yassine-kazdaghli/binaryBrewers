import React from 'react';
import "../logo/logo.css";
import movingImageLogo from "../logo/movingImageLogo.gif"

const Logo = () => {
  return (
    <div className="logo">
      <h1>Coding, Craft Beer, and Candid Conversations</h1>
      <img src={movingImageLogo} alt="logo" />
    </div>
  );
};

export default Logo;