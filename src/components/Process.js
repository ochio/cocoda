import React, { Component } from 'react';

class Process extends Component {
	constructor(props){
		super(props);
		this.state = {
			url: window.location.pathname.replace("/", "")
		}
	}

	componentDidMount() {
		const active = document.getElementById(`${this.state.url}`)
		active.classList.add('process_step-active')
	}

	render(){
		return(
			<div className="processWrap">
				<ul className="process">
					<li id="message" className="process_step">作成</li>
					<li id="confirm" className="process_step">確認</li>
					<li id="pay" className="process_step">決済</li>
					<li id="submit" className="process_step">送信</li>
				</ul>
			</div>
		)
	}
}

export default Process