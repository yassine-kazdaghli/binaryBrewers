import React from 'react';
import "../logo/logo.css";
import movingImageLogo from "../logo/movingImageLogo.gif"

const Logo = () => {
  return (
    <div className="logo">
      
      <img src={movingImageLogo} alt="logo" />
      <h1>Coding, Craft Beer, and Candid Conversations...</h1>
    <button>sign up</button>
    </div>
  );
};

export default Logo;