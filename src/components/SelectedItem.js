import React, { Component } from 'react';

import ItemsJson from '../json/items';

class SelectedItem extends Component{
	render(){
		const { item } = this.props
		const target = ItemsJson.filter(content =>
			content.className === item)[0];

		return(
			<div className="gift">
				<p className="heading">選択中のギフト</p>
				<div className="selectedItem">
					<img src={`${process.env.PUBLIC_URL}/img/${target.img}`} alt={target.company} className="selectedItem_img"/>
					<div className="selectedItem_detail">
						<p className="selectedItem_name">{target.company}ギフトカード</p>
						<p className="selectedItem_company">{target.company}</p>
						<p className="selectedItem_price">{this.props.price}円<span className="selectedItem_price-tax">(税込)</span></p>
					</div>
				</div>
			</div>
		)
	}
}

export default SelectedItem