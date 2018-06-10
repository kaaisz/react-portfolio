import React, { Component } from 'react'
import { portfolioItems } from '../../constants/portfolioItems.js';

export default class WorksPage extends Component {

  state = {
    data: {},
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    const data = portfolioItems[id];

    this.setState({ data });
  }

  render(){
    const{ data } = this.state;
    !data.title && <div>There is no data.</div>
    return(
      <div>
        {data.title}
      </div>
    )
  }
}
