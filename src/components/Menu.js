import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import styled, {css} from 'styled-components';

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

const Li = styled.li`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	width: 33.3%;
	font-size: 1rem;
	${props => props.close && css`
		background: #d9d9d9
	`}
	${props => props.open && css`
		cursor:pointer
	`}
`;

class Menu extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		this.props.history.push({
			pathname: `/`,
		})
	}

	render(){
		return (
			<ul className="menu">
				<Li open onClick={this.handleClick}>
					<IconComponent01 />
					ホーム
				</Li>
				<Li close>
					<IconComponent02 />
					履歴
				</Li>
				<Li close>
					<IconComponent03 />
					マイページ
				</Li>
			</ul>
		)
	}
}

export default withRouter(Menu)