import React, { Component } from 'react';
import Media from 'react-media';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-inner">
          <div className="Header-logo">Ayako Sayama</div>

          <Media query="(min-width:540px)">
          {(matches)=>(
            matches ?
            <ul className="Header-nav">
              <li>My Works</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
            :
            <img width={20} alt="Menu Icon" src={require("./../../assets/icons/menuIcon.svg")} />
          )}
          </Media>
        </div>
      </div>
    )
  }
}
