import React, { Component } from 'react';

import Title from '../components/title';
import Menu from '../components/Menu';

import ItemsJson from '../json/items';

import Coffee from '../img/item_coffee.png';


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
						<h2>{target.name}</h2>
						<h3>{target.company}</h3>
						<img src={target.img} alt={target.company} />
						<div className="priceSelect">
							<p>金額を選ぶ</p>
							<ul>
								<li className="price">2,000円<span className="price_tax">(税込)</span></li>
								<li className="price">3,500円<span className="price_tax">(税込)</span></li>
								<li className="price">10,000円<span className="price_tax">(税込)</span></li>
							</ul>
						</div>
					</div>
				<Menu />
			</div>
    )
  }
}

export default Item