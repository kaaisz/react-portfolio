import React, { Component } from 'react'
import './PortfolioItem.scss';

export default class PortfolioItem extends Component{
  state = {
    isHovered: false,
  }

  handleHoverIn = () => {
    this.setState({
      isHovered:true
    });
  }

  handleHoverOut = () => {
    this.setState({
      isHovered:false
    });
  }
  render(){
    const { isHovered } = this.state;
    const { imageUrl, title, categories } = this.props;
    return(
      <div className="PortfolioItem" onMouseOver={this.handleHoverIn}onMouseLeave={this.handleHoverOut}>
        <div className="PortfolioItem-image">
          <img src={imageUrl} alt="Global Clock" />
          {
            isHoverd &&(
              <button className="PortfolioItem-button">See Project</button>
            )
          }
        </div>
        <div className="PortfolioItem-details">
          <h3>{title}</h3>
          <p>{categories}</p>
        </div>
      </div>
    )
  }
}
