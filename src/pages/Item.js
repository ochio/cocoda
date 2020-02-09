import React, { Component } from 'react';

import Title from '../components/title';
import Menu from '../components/Menu';

import ItemsJson from '../json/items';


import '../scss/item.scss';

// import Coffee from '../img/item_coffee.png';


class Item extends Component {
  render(){
		const {params} = this.props.match;
		const id = parseInt(params.id, 10);
		const target = ItemsJson.filter(item => item.id === `${id}`)[0];

		console.log(target)
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
							<input id="2,000" type="radio" name="price" value="2,000"/>
							<label htmlFor="2,000" className="priceSelect_choice">2,000円<span className="priceSelect_tax">(税込)</span></label>
							<input id="3,500" type="radio" name="price" value="3,500"/>
							<label htmlFor="3,500" className="priceSelect_choice">3,500円<span className="priceSelect_tax">(税込)</span></label>
							<input id="10,000" type="radio" name="price" value="10,000"/>
							<label htmlFor="10,000" className="priceSelect_choice">10,000円<span className="priceSelect_tax">(税込)</span></label>
						</form>
					</div>
					<div className="rule">
						<div className="rule_limitWrap">
							<p>{target.company}</p>
							<p>有効期限:今から一年後に設定する</p>
						</div>
						<div className="rule_deatil">
							テキストが入ります
						</div>
						<div className="rule_terms">
						すでにアカウントをお持ちの方は、月額料金のお支払いにご利用いただけます。初めての方も、このカードをご利用のうえご入会ください。今すぐお持ちのデバイスでお楽しみいただけます。<br/>
						<span>
						※この商品は、ドコモ払い、ソフトバンクまとめて支払い・ワイモバイルまとめて支払いをご利用いただけません。<br/>
						※iTunesまたはGoogle Play経由でお支払いをされているNetflixアカウントでは、プリペイド・ギフトカードをご利用いただけません。
						プリペイド・ギフトカードを利用してアカウントの再登録を行っていただく必要がございます。<br/>
						</span>
						</div>
						<form>
							<label><input type="checkbox" name="agree" value="agreed" />利用規約に同意する</label>
							<input type="submit" value="このギフトを送る"/>
						</form>
					</div>
				<Menu />
			</div>
    )
  }
}

export default Item