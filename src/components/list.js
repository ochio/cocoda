import React, { Component } from 'react';
import '../scss/list.scss';


const category = ({items}) => (
	items = this.props.items,
	<li className={items}>{items}</li>
)

class List extends Component {
	items = this.props.items

  render(){
    return (
			<div>
				<h2>{this.props.category}</h2>
				<ul>
					{items = "shop"}
				</ul>
			</div>
		)
  }
}

export default List