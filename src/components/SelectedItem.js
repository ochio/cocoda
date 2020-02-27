import React, { Component } from 'react';

import ItemsJson from '../json/items';

class SelectedItem extends Component{
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		item:this.props.item,
	// 		target:""
	// 	}
	// }

	// handleJson(){
	// 	const target = ItemsJson.filter(content => 
	// 		content.className === this.props.item)[0];
	// 	this.setState({
	// 		target:target
	// 	})
	// }

	render(){
		const { item } = this.props
		const target = ItemsJson.filter(content => 
			content.className === item)[0];
		console.log(target);

		return(
			<div>
				<img src={`${process.env.PUBLIC_URL}/img/${target.img}`} alt={target.company} className="introArea_img"/>
				{item}
			</div>
		)
	}
}

export default SelectedItem