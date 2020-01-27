import React, { Component } from 'react';
import '../scss/list.scss';

// let json = require('../json/items.json');
const json = [
	{
		name: "ドリンクチケット",
		img: "src/img/mv_stb.png"
	},
	{
		name: "フードスイーツ",
		img: "src/img/mv_stb.png"
	},
	{
		name: "コンビニで使える",
		img: "src/img/mv_stb.png"
	},
	{
		name: "webサービス",
		img: "src/img/mv_stb.png"
	}
]

class Data extends Component{
	render(){
		const json = this.props.json;
		return this.props.data.map((json, index) => <li key={index} >{json.name}</li>)
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
				<h2>{this.props.title}</h2>
				<Data data = {json}/>
			</div>
		)
  }
}

export default List