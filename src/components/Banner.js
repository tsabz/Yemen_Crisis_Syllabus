import React from 'react';
import './Banner.css';
import Yemenbanner from '../assests/yemenbanner.jpg';

function Banner() {
    return (
      <div className="BannerDiv">
          <img className="Yemenbanner" alt="yemmen banner" src={Yemenbanner} />
      </div>
    );
  }
  
  export default Banner;
  