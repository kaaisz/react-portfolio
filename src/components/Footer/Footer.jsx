import React, { Component } from 'react'
import twitterImage from './../../assets/icons/twitter.svg';
import facebookImage from './../../assets/icons/facebook.svg';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>Copyright © 2018 Ayako Sayama</p>
        <div className="Footer-social">
          <a href="https://www.facebook.com/ayako.sayama.9" target="_blank nonopener nonreferer"><img alt="twitter icon" src={twitterImage} /></a>
          <a href="https://twitter.com/great_sayaman" target="_blank nonopener nonreferer"><img alt="facebook icon" src={facebookImage} /></a>
        </div>
      </div>
    )
  }
}
