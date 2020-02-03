import React, { Component } from 'react';
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

class Data extends Component{
	render(){
		return this.props.data.map((json, index) => 
		<li key={index} className={`list list_${json.className}`}>
			<div className="list_cover">
				<p>{json.name}</p>
			</div>
		</li>)
	}
}

class List extends Component {
	constructor(){
		super();
		this.state = ({
			data:json
		})
	}

  render(){
    return (
			<div>
				<h2 className="category">{this.props.title}</h2>
				<ul className="listWrap">
					<Data data = {json}/>
				</ul>
			</div>
		)
  }
}

export default List