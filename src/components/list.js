import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/list.scss';


// import category1 from '../img/category_drink.png';
// import category2 from '../img/category_food.png';
// import category3 from '../img/category_shop.png';
// import category4 from '../img/category_webService.png';

const json = [
	{
		name: "ドリンクチケット",
		img: "src/img/category_drink.png",
		className: "drink"
	},
	{
		name: "フードスイーツ",
		img: "src/img/category_food.png",
		className: "food"
	},
	{
		name: "コンビニで使える",
		img: "src/img/category_shop.png",
		className: "shop"
	},
	{
		name: "webサービス",
		img: "src/img/category_webService.png",
		className: "webService"
	}
]

class List extends Component {
  render(){
		const listSetting = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1
		}

		const carousel = json.map((json, index) => {
			return (
			<div key={index} className={`list list_${json.className}`}>
				<Link to="/item"></Link>
				<div className="list_cover">
					<p>{json.name}</p>
				</div>
			</div>)
			});

    return (
			<div className="search">
				<h2 className="search_title">{this.props.title}</h2>
				<div className="listWrap">aaaa
					<Router>
						<Slider {...listSetting}>
							{carousel}
						</Slider>
					</Router>
				</div>
				<Switch>
					<Route path="/item">
						<Item />
					</Route>
				</Switch>
			</div>
		)
  }
}

export default List