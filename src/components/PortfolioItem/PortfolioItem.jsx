import React, { Component } from 'react';
import PropTypes from 'prop-types';//import from package
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
    const { imageUrl, title, categories, id } = this.props;

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
          <h3 className={cx("PortfolioItem-title",{"PorfolioItem-title--active" : isHovered})}>{title}</h3>
          <span>
            {categories.map((category) => (
              <span key={category} className="PortfolioItem-category">
                {category}
              </span>
            ))}
          </span>
        </div>
      </div>
    )
  }
}

PortfolioItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  categories:PropTypes.array,//not necessary to add isRequired if you don't wanna make it Required
};

PortfolioItem.defaultProps = {
  categories:[],
};
