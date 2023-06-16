import React from 'react';
import logo from '../logo.svg';
import { Image } from 'react-bootstrap';
import appStore from "../Assets/appStoreDownload.png";
import animDisplay from "../Assets/animPhone.png"

import './HomePage.css';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="left-div">
        <div>
            <h1>ANIM</h1>
            <h2>SUSTAINABILITY MADE SIMPLE</h2>
            <a href="https://apps.apple.com/us/app/anim-health-food/id1664937171" target="_blank" rel="noopener noreferrer">
                <Image src={appStore} className='appStore'/>
            </a>
        </div>
      </div>
      <div className="right-div">
      <div className="App">
              <img
            src={animDisplay}
            className="App-logo"
            alt="logo"
            style={{ height: '800px' }} // Adjust the height value as per your requirement
          />
            </div>
      </div>
    </div>
  );
};

export default HomePage;
