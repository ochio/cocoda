import React, { Component } from 'react';

class SubmitBtn extends Component{
	render(){
		return(
			<div className="submit" onClick={this.props.onClick}>
				<div className="submit" >
					<button type="button"className="submit_text" form={this.props.form} disabled={this.props.validate}>
					{this.props.text}
					</button>
				</div>
			</div>
		)
	}
}

export default SubmitBtn