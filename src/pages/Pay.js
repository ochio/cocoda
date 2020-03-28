import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Title from '../components/Title';
import Process from '../components/Process';
import SubmitBtn from '../components/SubmitBtn';

import ItemsJson from '../json/items';

import Credit from '../img/pay_credit.png';
import Line from '../img/pay_line.png';
import Apple from '../img/pay_apple.png';

class Pay extends Component{
	constructor(props){
		super(props);
		this.state = {
			item:this.props.item,
			price:this.props.price,
			name:ItemsJson.filter(val =>
				val.className === this.props.item)[0],
			num:'',
			limit_y:'',
			limit_m:'',
			security:'',

		}
	}

	componentDidMount(){
		const name = ItemsJson.filter(val =>
			val.className === this.state.item)[0]
		this.setState({
			name:name
		})
		console.log(this.state);
	}

	handleChange(e){
		const val = e.target.value;
		const key = e.target.name
		this.setState({
			[key]:val
		})
	}

	canSubmit = () => {
		const { num, limit_y, limit_m, security } = this.state;
		let validInput = false;
		if(num&&limit_y&&limit_m&&security.length===3){
			validInput = true
		}else{
			validInput = false
		}

		return validInput
	}

	handleToTopPage = () => {
    this.props.history.push({
			pathname:'/',
		})
	}

	render(){
		return(
			<div className="payWrap">
				<Title name="決済"/>
				<Process />
				<div className="pay">
					<p className="payHeading payHeading_prev">決済内容</p>
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
					<div className="howWrap">
						<input type="radio" name="payment" id="pay1" className="how"/>
						<label className="how_way" htmlFor="pay1">
							クレジットカード決済
							<img className="how_img" src={Credit} alt="クレジットカード" />
						</label>
						<form className="how_detail">
							<label className="how_label">
								<span className="how_head">カード番号</span>
								<input className="how_input how_cardNum" type="text" name="num" pattern="\d*" placeholder="0000 0000 0000 0000" onChange={(e) => this.handleChange(e)}/>
							</label>
							<label className="how_label">
								<span className="how_head">有効期限</span>
								<div>
									<input className="how_input how_limit" type="num" name="limit_y" placeholder="mm" onChange={(e) => this.handleChange(e)}/>月/<input className="how_input how_limit" type="num_m" name="limit_m" placeholder="yy" onChange={(e) => this.handleChange(e)}/>まで有効
								</div>
							</label>
							<label className="how_label">
								<span className="how_head">セキュリティーコード</span>
								<input className="how_input how_code" type="text" name="security" placeholder="3桁の数字" onChange={(e) => this.handleChange(e)}/>
							</label>
						</form>
					</div>
					<div className="howWrap">
						<input type="radio" name="payment" id="pay2" className="how"/>
						<label className="how_way" htmlFor="pay2">キャリア決済</label>
						<div className="how_detail">ただいま準備中</div>
					</div>
				</div>
				<SubmitBtn 
					buttonType={"orange"}
					onClick={this.handleToTopPage}
					validate={!this.canSubmit()}
					form={this.state.formId} 
					text="決済する"/>
			</div>
		)
	}
}

export default withRouter(Pay)