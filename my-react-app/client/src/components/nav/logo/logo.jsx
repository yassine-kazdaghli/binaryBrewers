import React from 'react';
import "../logo/logo.css";
import movingImageLogo from "../logo/movingImageLogo.gif"

const Logo = () => {
  return (
    <div className="logo">
      
      <img src={movingImageLogo} alt="logo" />
      <h1>Coding, Craft Beer, and Candid Conversations...</h1>
     <p className='intro'> Join us as we delve deep into the world of tech, while sipping on some of the finest brews and engaging in unfiltered discussions.</p>
    </div>
  );
};

export default Logo;