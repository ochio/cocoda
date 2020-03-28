import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Message from '../pages/Message';

const mapStateToProps = state => {
	return {
		price: state.items.price,
		type: state.input.type,
		message: state.input.message,
		sign: state.input.sign
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectPrice : (price) => dispatch(actions.selectPrice(price)),
		selectType : (type) => dispatch(actions.selectType(type)),
		inputMessage : (text) => dispatch(actions.inputMessage(text)),
		inputSign : (text) => dispatch(actions.inputSign(text)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)