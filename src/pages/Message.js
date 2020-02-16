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
								<div className="cards_list">全て</div>
								<div className="cards_list">誕生日</div>
								<div className="cards_list">結婚祝い</div>
								<div className="cards_list">お見舞い</div>
								<div className="cards_list">季節物</div>
							</Slider>
						</section>
						<Slider {...setting}>
							<div className="message_imgWrap"><img className="message_img" src={Cheers} alt="Cheers"/></div>
							<div className="message_imgWrap"><img className="message_img" src={Birthday} alt="Birthday"/></div>
							<div className="message_imgWrap"><img className="message_img" src={Birthday02} alt="Birthday02"/></div>
							<div className="message_imgWrap"><img className="message_img" src={Wedding} alt="Wedding"/></div>
							<div className="message_imgWrap"><img className="message_img" src={Foryou} alt="Foryou"/></div>
							<div className="message_imgWrap"><img className="message_img" src={Foryou02} alt="Foryou02"/></div>
							<div className="message_imgWrap"><img className="message_img" src={Congratulate} alt="Congratulate"/></div>
							<div className="message_imgWrap"><img className="message_img" src={Cheers02} alt="Cheers02"/></div>
						</Slider>
					</div>
					<Menu />
				</section>
			</div>

    )
  }
}

export default Message