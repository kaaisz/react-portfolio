import React, { Component } from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem.jsx';
import './TopPage.scss';

export default class TopPage extends Component {
  render() {
    return (
      <div className="TopPage">
        <PortfolioItem />
      </div>
    )
  }
}
