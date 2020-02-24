import React, { Component } from 'react';
import Slider from 'react-slick';

import Title from '../components/title';
import Menu from '../components/Menu';
import Process from '../components/Process';

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

class Message extends Component {
	constructor(){
		super()
		this.state = {
			counts:{},
			allSlides:[...cateAry],
			initSlides:[...cateAry],
		}
	}

	componentDidMount(){
		const ele = document.getElementsByClassName("js_sort-list");
		const ary = Array.from(ele);
		let data = [];
		for(let i = 0; i < ary.length; i++){
			data.push(ary[i].dataset.sortItem)
		}
		let counts = {};
		for(let i = 0; i < data.length; i++){
			let key = data[i].replace(/\d/g, '');
			counts[key] = (counts[key])? counts[key] + 1 : 1;
		}
		this.setState({
			counts:{...counts},
		})
	}

	sum({...obj}){
		let sum = 0
		for (let key in obj){
			sum  += obj[key] 
		}
		return sum
	}

	filterList = () => {
		let select;
		let input = document.getElementsByClassName('js_nav-input');
		let target = this.state.allSlides;
    for(let i = 0; i < input.length; i++){
			if(input[i].checked === true){
				select = input[i].dataset.sortNav;
			}
		}
		const updateSlide = target.filter((slide) => {
			if(select === 'all') {
				return	slide
			}else{
				console.log(slide.replace(/\d/g, '').toLowerCase())
				console.log("select",select)
				return slide.replace(/\d/g, '').toLowerCase() === select
			}
		})
		this.setState({initSlides:updateSlide})
  }

  render(){
		const categorySetting = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 3.9,
			slidesToScroll: 1.5,
		}
		
		const setting = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 3.2,
			slidesToScroll: 1,
			rows: 2,
			className:"test"
		}
			
    return(
			<div className="messageWrap">
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
						<form>
						<section className="cards_lists">
							<Slider {...categorySetting}>
								<label className="cards_select">
									<input type="radio" name="category" className="cards_radio js_nav-input" data-sort-nav="all" onClick={this.filterList}/>
									<div className="cards_list">全て{this.sum({...this.state.counts})}</div>
								</label>
								<label className="cards_select">
									<input type="radio" name="category" className="cards_radio js_nav-input" data-sort-nav="birthday" onClick={this.filterList}/>
									<div className="cards_list">誕生日{this.state.counts.Birthday}</div>
								</label>
								<label className="cards_select">
									<input type="radio" name="category" className="cards_radio js_nav-input" data-sort-nav="wedding" onClick={this.filterList}/>
									<div className="cards_list">結婚祝い{this.state.counts.Wedding}</div>
								</label>
								<label className="cards_select">
									<input type="radio" name="category" className="cards_radio js_nav-input" data-sort-nav="congratulate" onClick={this.filterList}/>
									<div className="cards_list">お見舞い{this.state.counts.Congratulate}</div>
								</label>
								<label className="cards_select">
									<input type="radio" name="category" className="cards_radio js_nav-input" data-sort-nav="foryou" onClick={this.filterList}/>
									<div className="cards_list">その他{this.state.counts.Foryou}</div>
								</label>
							</Slider>
						</section>
							<Slider {...setting}>
								{this.state.initSlides.map((slide,index) => {
									return (
										<label className="message_imgWrap js_sort-list" data-sort-item={slide} key={index}>
											<input type="radio" name="type" className="message_radio"/>
											<div className="message_innerImg">
												<img className="message_img" src={imgObj[slide]} alt={slide}/>
											</div>
										</label>
									)
								})
								}
							</Slider>
							<label>
								メッセージを入力
								<input type="textarea" name="message" maxLength="400"　placeholder="全角400字以内(改行可)"/>
							</label>
							<label>
								署名を入力
								<input type="text" name="sign" maxLength="20" placeholder="全角20字以内"/>
							</label>
						</form>
					</div>
				</section>
					<Menu />
			</div>

    )
  }
}

export default Message