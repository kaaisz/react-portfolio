import React, { Component } from 'react'

export default class PortfolioItem extends Component{
  state = {
    isHovered: false,
  }

  handleHoverIn = () => {
    this.setState({
      isHovered:true
    });
  }

  handleHoversOut = () => {
    this.setState({
      isHovered:false
    });
  }
  render(){
    const { isHovered } = this.state;
    return(
      <div className="PortfolioItem" onMouseOver={this.handleHoverIn}onMouseLeave={this.handleHoverOut}>
        <div className="PortfolioItem-image">
          <img src={GlobalClock} alt="Global Clock" />
          {
            isHoverd &&(<button className="PortfolioItem-button">See Project</button>)
          }
        </div>
        <div className="PortfolioItem-details">
          <h3>Project Name</h3>
          <p>Project Categories</p>
        </div>
      </div>
    )
  }
}
