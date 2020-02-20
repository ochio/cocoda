import React, { Component } from 'react';
import Slider from 'react-slick';

import '../scss/message.scss';

import Title from '../components/title';
import Menu from '../components/Menu';
import Process from '../components/Process';

import Cheers from '../img/cardType_cheers.png';
import Birthday from '../img/cardType_birthday.png';
import Birthday02 from '../img/cardType_birthday02.png';
import Wedding from '../img/cardType_wedding.png';
import Foryou from '../img/cardType_foryou.png';
import Foryou02 from '../img/cardType_foryou02.png';
import Congratulate from '../img/cardType_congratulate.png';
import Cheers02 from '../img/cardType_cheers02.png';

class Message extends Component {
	constructor(){
		super()
		this.state = {
			counts:{}
		}
	}

	componentDidMount(){
		const ele = document.getElementsByClassName("message_imgWrap");
		const ary = Array.from(ele);
		let data = [];
		for(let i = 0; i < ary.length; i++){
			data.push(ary[i].dataset.type)
		}
		let counts = {};
		for(let i = 0; i < data.length; i++){
			let key = data[i];
			counts[key] = (counts[key])? counts[key] + 1 : 1;
		}
		this.setState({
			counts:{...counts}
		})
	}

	sum({...obj}){
		let sum = 0
		for (let key in obj){
			sum  += obj[key] 
		}
		return sum
	}

	handleDisplay(){
		
	}

  render(){
		const categorySetting = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 3.9,
			slidesToScroll: 1,
		}

		const setting = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 3.2,
			slidesToScroll: 1,
			rows: 2,
		}

    return(
			<div className="messageWrap">
			{/* {console.log(this.state.birthday)} */}
				<Title  name="ギフトカードを作成" />
				<Process />
				<section className="messageInner">
					<div className="gift">
						<p className="heading">選択中のギフト</p>
						<div>
							<div></div>
						</div>
					</div>
					<div className="cards">
						<p className="heading">カードを選ぶ</p>
						<section className="cards_lists">
							
							<Slider {...categorySetting}>
								<label className="cards_select">
									<input type="radio" name="category" className="cards_radio"/>
									<div className="cards_list">全て{this.sum({...this.state.counts})}</div>
								</label>
								<label className="cards_select">
									<input type="radio" name="category" className="cards_radio"/>
									<div className="cards_list">誕生日{this.state.counts.birthday + this.state.counts.cheers}</div>
								</label>
								<label className="cards_select">
									<input type="radio" name="category" className="cards_radio"/>
									<div className="cards_list">結婚祝い{this.state.counts.wedding}</div>
								</label>
								<label className="cards_select">
									<input type="radio" name="category" className="cards_radio"/>
									<div className="cards_list">お見舞い{this.state.counts.congratulate}</div>
								</label>
								<label className="cards_select">
									<input type="radio" name="category" className="cards_radio"/>
									<div className="cards_list">その他{this.state.counts.foryou}</div>
								</label>
							</Slider>
						</section>
						<form>
							<Slider {...setting}>
								<label className="message_imgWrap" data-type="cheers">
									<input type="radio" name="type" className="message_radio"/>
									<div className="message_innerImg">
										<img className="message_img" src={Cheers} alt="Cheers"/>
									</div>
								</label>
								<label className="message_imgWrap" data-type="birthday">
									<input type="radio" name="type" className="message_radio"/>
									<div className="message_innerImg">
										<img className="message_img" src={Birthday} alt="Birthday"/>
									</div>
								</label>
								<label className="message_imgWrap" data-type="birthday">
									<input type="radio" name="type" className="message_radio"/>
									<div className="message_innerImg">
										<img className="message_img" src={Birthday02} alt="Birthday02"/>
									</div>
								</label>
								<label className="message_imgWrap" data-type="wedding">
									<input type="radio" name="type" className="message_radio"/>
									<div className="message_innerImg">
										<img className="message_img" src={Wedding} alt="Wedding"/>
									</div>
								</label>
								<label className="message_imgWrap" data-type="foryou">
									<input type="radio" name="type" className="message_radio"/>
									<div className="message_innerImg">
									<img className="message_img" src={Foryou} alt="Foryou"/>
									</div>
								</label>
								<label className="message_imgWrap" data-type="foryou">
									<input type="radio" name="type" className="message_radio"/>
									<div className="message_innerImg">
									<img className="message_img" src={Foryou02} alt="Foryou02"/>
									</div>
								</label>
								<label className="message_imgWrap" data-type="congratulate">
									<input type="radio" name="type" className="message_radio"/>
									<div className="message_innerImg">
									<img className="message_img" src={Congratulate} alt="Congratulate"/>
									</div>
								</label>
								<label className="message_imgWrap" data-type="cheers">
									<input type="radio" name="type" className="message_radio"/>
									<div className="message_innerImg">
									<img className="message_img" src={Cheers02} alt="Cheers02"/>
									</div>
								</label>
							</Slider>
						</form>
					</div>
					<Menu />
				</section>
			</div>

    )
  }
}

export default Message