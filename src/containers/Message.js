import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Message from '../pages/Message';


const mapStateToProps = state => {
	return {
		selectedItem: state.items.selectedItem,
		price: state.items.price,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectPrice: (price) => dispatch(actions.selectPrice(price)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)