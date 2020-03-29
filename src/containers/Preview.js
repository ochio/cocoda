import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Preview from '../pages/Preview';

const mapStateToProps = state => {
	return {
		type: state.input.type,
		message: state.input.message,
		sign: state.input.sign,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectPrice: (price) => dispatch(actions.selectPrice(price)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)