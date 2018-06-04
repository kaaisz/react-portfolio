import React, { Component } from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem.jsx';
import GlobalClock from '../../assets/images/global-clock.jpg';
import './TopPage.scss';

export default class TopPage extends Component {
  render() {
    return (
      <div className="TopPage">
        <PortfolioItem imageUrl={GlobalClock} title="Project Name" categories="Categories" />
      </div>
    )
  }
}
