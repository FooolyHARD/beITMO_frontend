import React from 'react';
import "../styles/TopSideBar.css";
import image from "../img/topsidebar.png";

function TopSideBar() {
  return (
    <div className='top-image-container'>
      <img className = 'top-image' src={image} alt="PNG Image"/>
    </div>
  );
}

export default TopSideBar;
