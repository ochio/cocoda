import React, { Component } from 'react';
import Slider from 'react-slick';

import '../scss/message.scss';

import Title from '../components/title';
import Menu from '../components/Menu';

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
		const setting = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 4.2,
			slidesToScroll: 1
		}
    return(
			<div className="messageWrap">
				<Title  name="ギフトカードを作成" />
				<div>
					<p>選択中のギフト</p>
					<div>
						<div></div>
					</div>
				</div>
				<div>
					<p>カードを選ぶ</p>
					<Slider {...setting}>
						<div>全て</div>
						<div>誕生日</div>
						<div>結婚祝い</div>
						<div>お見舞い</div>
						<div>季節物</div>
					</Slider>
					<Slider {...setting}>
						<div><img src={Cheers} /></div>
						<div><img src={Birthday} /></div>
						<div><img src={Birthday02} /></div>
						<div><img src={Wedding} /></div>
						<div><img src={Foryou} /></div>
						<div><img src={Foryou02} /></div>
						<div><img src={Congratulate} /></div>
						<div><img src={Cheers02} /></div>
					</Slider>
				</div>
				<Menu />
			</div>
    )
  }
}

export default Message