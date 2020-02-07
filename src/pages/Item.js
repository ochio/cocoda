import React, { Component } from 'react';

import Title from '../components/title';
import Menu from '../components/Menu'

class Item extends Component {
  render(){
    return(
			<div>
				<Title  name="商品詳細" />
					<div className="priceArea">
						<h2>{this.props.itemName}</h2>
						<h3>{this.props.company}</h3>
						<img src={this.props.img} alt={this.props.company} />
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