import React, { Component } from 'react';

import '../scss/menu.scss';
import IconHome from '../img/icon_home.svg'
import IconHistory from '../img/icon_history.svg'
import IconMypage from '../img/icon_mypage.svg'

const IconComponent01 = () => {
	return <img src={IconHome} alt="ホーム" />
}
const IconComponent02 = () => {
	return <img src={IconHistory} alt="履歴" />
}
const IconComponent03 = () => {
	return <img src={IconMypage} alt="マイページ" />
}

class Menu extends Component{
	render(){
		return (
			<ul className="menu">
				<li className="menu_list">
					<IconComponent01 />
					ホーム
				</li>
				<li className="menu_list">
					<IconComponent02 />
					履歴
				</li>
				<li className="menu_list">
					<IconComponent03 />
					マイページ
				</li>
			</ul>
		)
	}
}

export default Menu