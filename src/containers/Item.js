import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Item from '../pages/Item';

const mapStateToProps = state => {
	return {
		price: state.items.price,
		isSubmitEnabled: state.items.isSubmitEnabled,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectPrice: (price) => dispatch(actions.selectPrice(price)),
		checked: (bool) => dispatch(actions.checked(bool))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)