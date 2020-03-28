import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Pay from '../pages/Pay';

const mapStateToProps = state => {
	return {
		item: state.items.selectedItem,
		price: state.items.price,
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

export default connect(mapStateToProps, mapDispatchToProps)(Pay)