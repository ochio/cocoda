import React, { Component } from 'react';

import '../scss/menu.scss';
import Icon from '../img/icon_menu.svg'

const IconComponent = () => {
	return <img src={Icon} alt="ホーム" />
}

class Menu extends Component{
	render(){
		return (
			<ul className="menu">
				<li className="menu_list">ホーム
				<IconComponent />
				</li>
				<li className="menu_list">履歴</li>
				<li className="menu_list">マイページ</li>
			</ul>
		)
	}
}

export default Menu