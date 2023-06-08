// import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';

// export class HomePage extends Component { 
//     render()  {
//     return (
            // <div className="App">
            // <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            // </header>
            // </div>
//         );
//     }
// }

import React from 'react';
import logo from '../logo.svg';
import './HomePage.css';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="left-div">
        <div>
            <h1>ANIM</h1>
            <h2>SUSTAINABILITY MADE SIMPLE</h2>
        </div>
      </div>
      <div className="right-div">
      <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            </div>
      </div>
    </div>
  );
};

export default HomePage;
