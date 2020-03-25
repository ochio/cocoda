import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Title from '../components/Title';
import Menu from '../components/Menu';
import History from '../components/History';

import ItemsJson from '../json/items';

class Item extends Component {
	constructor(props){
		super(props);
		this.state = {
			error : "",
			isSubmitEnabled: true,
			selectedItem :this.props.selectedItem,
		}
	}

	handleSubmit(e){
		this.setState({
			isSubmitEnabled : e.target.checked ? false : true
		})
	}

	handleToSettingPage = () => {
    this.props.history.push({
			pathname:'/message',
			state:{
				// item:this.state.selectedItem,
				// price:this.state.price
			}
		})
	}
	
  render(){
		console.log(this.props);
		const {params} = this.props.match;
		const id = parseInt(params.id, 10);
		const target = ItemsJson.filter(item => item.id === `${id}`)[0];
		const date = new Date();
		date.setMonth(date.getMonth() + 1);
		date.setFullYear(date.getFullYear() + 1);


    return(
			<div className="itemWrap">
				<Title  name="商品詳細" />
					<div className="introArea">
						<h2 className="introArea_title">{target.name}</h2>
						<h3 className="introArea_company">{target.company}</h3>
						<div className="introArea_imgWrap">
							<img src={`${process.env.PUBLIC_URL}/img/${target.img}`} alt={target.company} className="introArea_img"/>
						</div>
					</div>
					<div className="priceSelect">
						<p className="priceSelect_text">金額を選ぶ</p>
						<form name="price" className="priceSelect_list">
							<input id="2,000" type="radio" name="price" value="2,000" className="priceSelect_radio" onClick={(e)=>this.props.selectPrice(e.target.value)}/>
							<label htmlFor="2,000" className="priceSelect_choice">2,000円<span className="priceSelect_tax">(税込)</span></label>
							<input id="3,500" type="radio" name="price" value="3,500" className="priceSelect_radio" onClick={(e)=>this.props.selectPrice(e.target.value)}/>
							<label htmlFor="3,500" className="priceSelect_choice">3,500円<span className="priceSelect_tax">(税込)</span></label>
							<input id="10,000" type="radio" name="price" value="10,000" className="priceSelect_radio" onClick={(e)=>this.props.selectPrice(e.target.value)}/>
							<label htmlFor="10,000" className="priceSelect_choice">10,000円<span className="priceSelect_tax">(税込)</span></label>
						</form>
					</div>
					<div className="rule">
						<div className="rule_limitWrap">
							<p className="rule_company">{target.company}</p>
							<p className="rule_limit">有効期限:{date.toLocaleDateString()}</p>
						</div>
						<div className="rule_detail">
						スターバックスの店舗にて、お好きなドリンク1杯(税込500円まで)とお引替えいただけるチケットです。<br/>
						チケットの有効期限は、購入日から4ヶ月後の月末となります。<br/>
						お会計の際にレジにてギフトチケット画面をご提示または印刷してお持ちください。ドリンク代が500円（税込）を超える場合は、超えた金額をお支払ください。また、つり銭はご容赦ください。
						</div>
						<div className="rule_terms">
						すでにアカウントをお持ちの方は、月額料金のお支払いにご利用いただけます。初めての方も、このカードをご利用のうえご入会ください。今すぐお持ちのデバイスでお楽しみいただけます。<br/>
						<span className="rule_terms-red">
						※この商品は、ドコモ払い、ソフトバンクまとめて支払い・ワイモバイルまとめて支払いをご利用いただけません。<br/>
						※iTunesまたはGoogle Play経由でお支払いをされているNetflixアカウントでは、プリペイド・ギフトカードをご利用いただけません。
						プリペイド・ギフトカードを利用してアカウントの再登録を行っていただく必要がございます。<br/>
						</span>
						</div>
						<form className="rule_form">
							<div className="rule_checkbox">
								<label><input type="checkbox" name="agree" value="agreed" className="rule_agreeBtn" onClick={e => this.handleSubmit(e)}/>利用規約に同意する</label>
							</div>
							{this.state.error}
							<button type="button" className="rule_submit" disabled={this.state.isSubmitEnabled} onClick={this.handleToSettingPage} >
							このギフトを送る
							</button>
						</form>
					</div>
					{sessionStorage.length ? <History /> : ""}
				<Menu />
			</div>
    )
  }
}

export default withRouter(Item)