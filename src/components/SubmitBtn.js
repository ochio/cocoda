import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const color = {
	orange:"#f08804",
	black:"#212529"
}

const Button = styled.div`
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	padding: 10px 0;
	background: rgba(255, 255, 255, 0.82);
`;

const InnerBtn = styled.button`
	width: 282px;
	padding: 19px 0;
	font-size: 1.8rem;
	color: #ffffff;
	border-color: unset;
	border-radius: 4px;
	${ props => props.disabled ? css`
			background: #d9d9d9
	`:css`
	background:${ props => color[props.colorType]}`
	};
`

class SubmitBtn extends Component{
	render(){
		return(
			<Button onClick={this.props.onClick}>
				<InnerBtn type="button" form={this.props.form} disabled={this.props.validate} colorType={this.props.buttonType}>
				{this.props.text}
				</InnerBtn>
			</Button>
		)
	}
}

export default SubmitBtn