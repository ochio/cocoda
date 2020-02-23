import React, { Component } from 'react';

class Title extends Component{
  render(){
		const isUnderlayer = this.props.name === "HOME" ? "no" : "back";

    return(
      <div className={`title ${isUnderlayer}`} >
          <p className="title_head">{this.props.name}</p>
      </div>
    )
  }
}

export default Title