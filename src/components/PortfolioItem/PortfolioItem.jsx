import React, { Component } from 'react';
import cx from 'classnames';//add classnames package.(whatever is available - about part of cx name)
import PortfolioButton from '../PortfolioButton/PortfolioButton.jsx';
import './PortfolioItem.scss';

export default class PortfolioItem extends Component {

  state = {
    isHovered: false,
  }

  handleHoverIn = () => {
    this.setState({
      isHovered: true
    });
  }

  handleHoverOut = () => {
    this.setState({
      isHovered: false
    });
  }
  render() {
    const { isHovered  } = this.state;
    const { imageUrl, title, categories } = this.props;

    return (
      <div className="PorfolioItem" onMouseOver={this.handleHoverIn} onMouseLeave={this.handleHoverOut}>
        <div className="PortfolioItem-image">
          <img src={imageUrl} alt="Global Clock" />
          {
            isHovered && (
              <PortfolioButton>
                See details
              </PortfolioButton>
            )
          }
        </div>
        <div className="PortfolioItem-details">
          <h3 className={cx({"PorfolioItem-title--active" : isHovered})}>{title}</h3>//cx must make it the same with imported one 
          <span>
            {categories.map((category) => (
              <span key={category} className="PortfolioItem-category"
              >
                {category}
              </span>
            ))}
          </span>
        </div>
      </div>
    )
  }
}
