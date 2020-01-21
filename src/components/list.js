import React, { Component } from 'react';
import '../scss/list.scss';

let json = require('../json/items.json');
console.log(json);


class List extends Component {
	constructor(){
		super();
		this.state = ({
			data:[]
		})
	}

	setData(){
		this.setState({data: json})
		console.log(this.data);
	}

  render(){
		const data = (state) => {
		const category = state.data.map((category, index) => <li key={index} >{category}</li>)
		return <ul><category /></ul>
		}

    return (
			<div>
				<h2>{this.props.title}</h2>
				<data />
			</div>
		)
  }
}

export default List