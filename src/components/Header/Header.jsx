import React, { Component } from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
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
            <div className="Header-nav">
              <NavLink to="/" className="Header-nav-item">My Works</NavLink>
              <NavLink to="/about" className="Header-nav-item">About Me</NavLink>
              <NavLink to="/contact" className="Header-nav-item">Contact</NavLink>
            </div>
            :
            <img width={20} alt="Menu Icon" src={require("./../../assets/icons/menuIcon.svg")} />
          )}
          </Media>
        </div>
      </div>
    )
  }
}
