import React, { Component } from 'react';
import twitterImage from './assets/icons/twitter.svg';
import facebookImage from './assets/icons/facebook.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="Header-logo">Logo</div>
          <ul className="Header-nav">
            <li>About Me</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
          <div className="Content">
            This is the Content
          </div>
          <div className="Footer">
            <p>Copyright © 2015 Designova</p>
            <div className="Footer-social">
              <img src={twitterImage} />
              <img src={facebookImage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
