import React, { Component } from 'react';
import {Link, withRouter} from "react-router-dom";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/search.scss';

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
	}

	handleClick(){
		this.props.history.push({
			pathname: "/item",
		})
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
			<div key={index} className={`list list_${json.className}`}>
				<Link to={`/item/${json.id}`} className="list_link" >
					<div className="list_cover">
						<p>{json.name}</p>
					</div>
				</Link>
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

export default withRouter(List)