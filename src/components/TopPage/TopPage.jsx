import React, { Component } from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem.jsx';
import { portfolioItems } from '../../constants/portfolioItems.js';
import './TopPage.scss';

export default class TopPage extends Component {
  render() {
    return (
      <div class="Container">
        <div className="TopPage">
        {portfolioItems.map((portfolioItem)=>(
          <PortfolioItem
          key={portfolioItem.title}
          imageUrl={portfolioItem.imageUrl}
          title={portfolioItem.title}
          categories={portfolioItem.categories}
           />
        ))}
        </div>
      </div>
    )
  }
}
