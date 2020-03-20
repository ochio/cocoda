import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Item from '../pages/Item';

const mapStateToProps = state => {
	return {
		price: state.price,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectPrice: (price) => dispatch(actions.selectPrice(price))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)