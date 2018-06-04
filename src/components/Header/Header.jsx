import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-inner">
          <div className="Header-logo">Ayako Sayama</div>
          <ul className="Header-nav">
            <li>About Me</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    )
  }
}
