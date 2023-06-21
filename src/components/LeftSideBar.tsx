import React from 'react';
import "../styles/LeftSideBar.css";
import image from "../img/leftsidebar.png";

function LeftSideBar() {
  return (
    <div className='image-container'>
      <img className = 'image' src={image} alt="PNG Image"/>
    </div>
  );
}

export default LeftSideBar;
