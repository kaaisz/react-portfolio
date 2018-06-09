import React, { Component } from 'react';
import './Container.scss';

export default class Container extends Component{
  render() {
    const { children } = this.props;
    return (
      <div className="Container">
        { children }
      </div>
    )
  }
}
