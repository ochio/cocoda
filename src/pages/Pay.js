import React, { Component } from 'react';

import Title from '../components/Title';
import Process from '../components/Process';

import ItemsJson from '../json/items';

import Credit from '../img/pay_credit.png';
import Line from '../img/pay_line.png';
import Apple from '../img/pay_apple.png';

class Pay extends Component{
	constructor(props){
		super(props);
		this.state = {
			item:this.props.location.state.item,
			price:this.props.location.state.price,
			name:''
		}
	}

	componentDidMount(){
		const name = ItemsJson.filter(val =>
			val.className === this.state.item)[0]
		this.setState({
			name:name
		})
	}

	render(){
		return(
			<div className="payWrap">
				<Title name="決済"/>
				<Process />
				<div className="pay">
					<p className="payHeading">決済内容</p>
					<div className="pay_detail">
						<p className="pay_name">{this.state.name.company}&nbsp;&nbsp;{this.state.price}円分</p>
						<p className="pay_num">数量:1</p>
					</div>
					<p className="pay_sum">合計金額&nbsp;&nbsp;<span className="pay_sum-large">{this.state.price}円</span></p>
				</div>
				<div className="payInput">
					<p className="payHeading">決済方法</p>
					<div className="payService">
						<img className="payService_img" src={Line} alt="lineペイ" />
						<img className="payService_img" src={Apple} alt="appleペイ" />
					</div>
					<form>
						<input type="radio" name="payment" id="pay1" className="how"/>
						<label className="how_way" htmlFor="pay1">
							クレジットカード決済
							<img className="how_img" src={Credit} alt="クレジットカード" />
						</label>
						<div className="how_detail">aaaaa</div>
						<input type="radio" name="payment" id="pay2" className="how"/>
						<label className="how_way" htmlFor="pay2">キャリア決済</label>
						<div className="how_detail">bbbbb</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Pay