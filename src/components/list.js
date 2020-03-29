import React, { Component } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemsJson from '../json/items';

class List extends Component {
	constructor(props){
		super(props);
		this.state = {
			name:"",
			itemName:"",
			company: "",
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleSessionStorage = this.handleSessionStorage.bind(this);
		this.handleFuncs = this.handleFuncs.bind(this);
	}

	handleClick(json){
		this.props.selectItem(json.className)
		this.props.history.push({
			pathname: `/item/${json.id}`,
		})
	}

	handleSessionStorage(json){
		let n = 0;
		for(let i = 0; i < sessionStorage.length; i++){
			if(sessionStorage.key(i).indexOf("visited_") !== -1){
				n++
			}
		}
		sessionStorage.setItem(`visited_${n}`, json.className)
	}

	handleFuncs(json,index){
		this.handleClick(json,index)
		this.handleSessionStorage(json)
	}

  render(){
		const listSetting = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 3.5,
			slidesToScroll: 1
		}

		const carousel = ItemsJson.map((json, index) => {
			return (
			<div key={index} className={`list list_${json.className}`} onClick={() => this.handleFuncs(json)} >
				<button className="list_link">
					<div className="list_cover">
						<p>{json.name}</p>
					</div>
				</button>
			</div>)
			});

    return (
			<div className="search">
				<h2 className="search_title">{this.props.title}</h2>
				<div className="listWrap">
						<Slider {...listSetting}>
							{carousel}
						</Slider>
				</div>
				
			</div>
		)
  }
}

export default List