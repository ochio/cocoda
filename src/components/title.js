import React, { Component } from 'react';
import '../scss/title.scss';


class Title extends Component{
  render(){
    return(
      <div className="title">
          <p className="title_head">     {this.props.name}</p>
      </div>
    )
  }
}

export default Title