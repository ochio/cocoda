import React, { Component } from 'react';

class SubmitBtn extends Component{
	render(){
		return(
			<div className="submit" >
				<button type="submit"className="submit_text" form={this.props.form}>
				{this.props.text}
				</button>
			</div>
		)
	}
}

export default SubmitBtn