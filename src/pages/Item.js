import React, { Component } from 'react';

import Title from '../components/title';
import Menu from '../components/Menu';

import ItemsJson from '../json/items';


import '../scss/item.scss';

// import Coffee from '../img/item_coffee.png';


class Item extends Component {
  render(){
		const {params} = this.props.match;
		const id = parseInt(params.id, 10);
		const target = ItemsJson.filter(item => item.id === `${id}`)[0];

		console.log(target)
    return(
			<div>
				<Title  name="商品詳細" />
					<div className="priceArea">
						<h2 className="priceArea_title">{target.name}</h2>
						<h3 className="priceArea_company">{target.company}</h3>
						<div className="priceArea_imgWrap">
							<img src={`${process.env.PUBLIC_URL}/img/${target.img}`} alt={target.company} className="priceArea_img"/>
						</div>
					</div>
					<div className="priceSelect">
						<p className="priceSelect_text">金額を選ぶ</p>
						<form name="price" className="priceSelect_list">
							<input id="2,000" type="radio" name="price" value="2,000"/>
							<label htmlFor="2,000" className="priceSelect_choice">2,000円<span className="priceSelect_tax">(税込)</span></label>
							<input id="3,500" type="radio" name="price" value="3,500"/>
							<label htmlFor="3,500" className="priceSelect_choice">3,500円<span className="priceSelect_tax">(税込)</span></label>
							<input id="10,000" type="radio" name="price" value="10,000"/>
							<label htmlFor="10,000" className="priceSelect_choice">10,000円<span className="priceSelect_tax">(税込)</span></label>
						</form>
					</div>
				<Menu />
			</div>
    )
  }
}

export default Item