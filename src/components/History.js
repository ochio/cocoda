import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Slider from 'react-slick';

import ItemsJson from '../json/items';

class History extends Component{
	handleClick(json){
		this.props.history.push({
			pathname: `/item/${json.id}`,
			state:{
				selectedItem:json.className
			}
		})
		window.scrollTo(0, 0)

	}

	render(){
		let items = []
		for(let i = 0; i < sessionStorage.length; i++){
			items.push(sessionStorage.getItem(`visited_${i}`))
		}
		items = items.filter((item, i, self) => {
			return self.indexOf(item) === i;
		})

		const Setting = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 3.3,
			slidesToScroll: 1,
		}
		return (
			<div className="history">
				<h2 className="history_title">最近閲覧したギフト</h2>
					<Slider {...Setting}>
					{items.map((item,index) => {
						let json = ItemsJson.filter(unit => unit.className === item)[0]
						return (
							<div key={index} className="history_inner" onClick={() => this.handleClick(json)}>
								<img src={`${process.env.PUBLIC_URL}/img/history_${item}.png`} alt={item} className="history_img" />
								<p className="history_name">{json.historyText}</p>
								<p className="history_company">{json.company}</p>
								<p className="history_price">¥1,000</p>
							</div>
						)
					})}
					</Slider> 
			</div>	
		)
	}

}

export default withRouter(History)