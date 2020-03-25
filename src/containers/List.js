import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../actions/actions';
import List from '../components/List';

const mapStateToProps = state => {
	return {
		selectedItem: state.items.selectedItem,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectItem: (item) => dispatch(actions.selectItem(item)),
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))