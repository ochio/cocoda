import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Title from '../components/Title';
import Process from '../components/Process';
// import SelectedItem from '../components/SelectedItem';
import SelectedItem from '../containers/SelectedItem';
import SubmitBtn from '../components/SubmitBtn';

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
	previewCard(){
		const  {message, type, sign} = this.props
		const prev = CardsJson.filter(card =>
			card.name === type)[0]
		return (
			<div className="preview">
				<div className="preview_img">
					<img src={imgObj[prev.name]} alt={prev.category}/>
				</div>
				<div className="preview_text">
					<p className="preview_message">{message}</p>
					<p className="preview_sign"><span className="preview_sign-bold">From</span>:{sign}</p>
				</div>
			</div>
		)
	}

	handleToPay = () =>{
		this.props.history.push({
			pathname:'/pay',
		})
	}

	
	render(){
		return (
			<div className="previewWrap">
				<Title name="プレビュー"/>
				<Process />
				<SelectedItem />
				<div className="created" >
					<p className="heading">作成したカード</p>
					{this.previewCard()}
				</div>
				<SubmitBtn
					buttonType={"black"}
					onClick={this.handleToPay}
					text="この内容で決定、決済へ進む"/>
			</div>
		)
	}
}

export default withRouter(Preview)