import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Title from '../components/Title';
import Process from '../components/Process';
import SelectedItem from '../components/SelectedItem';

import CardsJson from '../json/cards';

import Cheers from '../img/cardType_cheers.png';
import Birthday from '../img/cardType_birthday.png';
import Birthday02 from '../img/cardType_birthday02.png';
import Wedding from '../img/cardType_wedding.png';
import Foryou from '../img/cardType_foryou.png';
import Foryou02 from '../img/cardType_foryou02.png'; 
import Congratulate from '../img/cardType_congratulate.png';
import Cheers02 from '../img/cardType_cheers02.png';

const imgAry = [Cheers,Birthday,Birthday02,Wedding,Foryou,Foryou02,Congratulate,Cheers02];
const imgObj = {};

let cateAry = []; 
for(let i = 0; i < CardsJson.length; i++){
	cateAry.push(CardsJson[i].name);
	imgObj[`${cateAry[i]}`] = imgAry[i]
}

class Preview extends Component{
	constructor(props){
		super(props);
		this.state = {
			item: this.props.location.state.item,
			price: this.props.location.state.price,
			type: this.props.location.state.type,
			message: this.props.location.state.message,
			sign: this.props.location.state.sign,
		}
	}

	previewCard(){
		const prev = CardsJson.filter(card =>
			card.name === this.state.type)[0]
		return (
			<div className="preview">
				<div className="preview_img">
					<img src={imgObj[prev.name]} alt={prev.category}/>
				</div>
				<div className="preview_text">
					<p className="preview_message">{this.state.message}</p>
					<p className="preview_sign"><span className="preview_sign-bold">From</span>:{this.state.sign}</p>
				</div>
			</div>
		)
	}

	handleToPay = () =>{
		this.props.history.push({
			pathname:'/pay',
			state:{
				item:this.state.item,
				price:this.state.price,
			}
		})
	}

	
	render(){
		return (
			<div className="previewWrap">
				<Title name="プレビュー"/>
				<Process />
				<SelectedItem 
					item={this.state.item} 
					price={this.state.price}/>
				<div className="created" >
					<p className="heading">作成したカード</p>
					{this.previewCard()}
				</div>
				<button type="submit" onClick={this.handleToPay}>
				この内容で決定、決済へ進む
				</button>
			</div>
		)
	}
}

export default withRouter(Preview)