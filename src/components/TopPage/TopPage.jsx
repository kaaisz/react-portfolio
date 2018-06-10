import React, { Component } from 'react'
import PortfolioItem from '../PortfolioItem/PortfolioItem.jsx';
import { portfolioItems } from '../../constants/portfolioItems.js';
import Container from '../Container/Container.jsx';
import { NavLink } from 'react-router-dom';
import './TopPage.scss';

export default class TopPage extends Component {
  render() {
    return (
      <Container>
        <div className="TopPage">
        {portfolioItems.map((portfolioItem, index)=>(
          <NavLink to={`/works/${index}`}>
            <PortfolioItem
              key={portfolioItem.title}
              imageUrl={portfolioItem.imageUrl}
              title={portfolioItem.title}
              categories={portfolioItem.categories}
              id={index}
             />
          </NavLink>
        ))}
        </div>
      </Container>
    )
  }
}
