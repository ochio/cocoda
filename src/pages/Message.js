import React, { Component } from 'react';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom';

import Title from '../components/Title';
import Process from '../components/Process';
import SubmitBtn from '../components/SubmitBtn';
// import SelectedItem from '../components/SelectedItem';
import SelectedItem from '../containers/SelectedItem.js';

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
	constructor(props){
		super(props)
		this.state = {
			counts:{},
			allSlides:[...cateAry],
			initSlides:[...cateAry],
			formId:"content",
			value:{
				type:'',
				message:'',
				sign:''
			},
			selected:{...this.props.location.state}
		}
	}

	canSubmit = () => {
		let value = {}
		value.type  = this.props.type;
		value.message  = this.props.message;
		value.sign  = this.props.sign;

		const validInput = Object.values(value).filter(value => {
					return value === ''
				}).length === 0

		return validInput
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
				return slide.replace(/\d/g, '').toLowerCase() === select
			}
		})
		this.setState({initSlides:updateSlide})
	}
	
	handleToPreviewPage = () => {
    this.props.history.push({
			pathname:'/preview',
		})
	}

  render(){
		const categorySetting = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 3.9,
			slidesToScroll: 1.5,
			className:"cards_lists"
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
				<Title  name="ギフトカードを作成" />
				<Process />
				<section className="messageInner">
					<SelectedItem />
					<div className="cards">
						<p className="heading">カードを選ぶ</p>
						<form id={this.state.formId}>
							<section>
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
							<section className="cardsWrap">
								<Slider {...setting}>
									{this.state.initSlides.map((slide,index) => {
										return (
											<label className="message_imgWrap js_sort-list" data-sort-item={slide} key={index}>
												<input 
												type="radio" 
												name="type" 
												value={slide} 
												className="message_radio" 
												onChange={(e)=>this.props.selectType(e.target.value)}
												/>
												<div className="message_innerImg">
													<img className="message_img" src={imgObj[slide]} alt={slide}/>
												</div>
											</label>
										)
									})
									}
								</Slider>
							</section>
							<section className="textInput">
								<label className="textInput_item">
									<span className="textInput_head">メッセージを入力</span>
									<textarea type="textarea" name="message" maxLength="400" cols="40" placeholder="全角400字以内(改行可)" className="textInput_textArea" value={this.props.message} onChange={(e)=>this.props.inputMessage(e.target.value)}></textarea>
								</label>
								<label className="textInput_item">
									<span className="textInput_head">署名を入力</span>
									<input type="text" name="sign" maxLength="20" placeholder="全角20字以内" value={this.props.sign} className="textInput_sign" onChange={(e)=>this.props.inputSign(e.target.value)}/>
								</label>
							</section>
							</form>
						</div>
					</section>
					<SubmitBtn 
					buttonType={"orange"}
					onClick={this.handleToPreviewPage}
					validate={!this.canSubmit()}
					form={this.state.formId} 
					text="確認へ進む"/>
				</div>

    )
  }
}

export default withRouter(Message)