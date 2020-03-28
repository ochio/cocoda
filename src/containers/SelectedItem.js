import { connect } from 'react-redux';
import SelectedItem from '../components/SelectedItem';

const mapStateToProps = state => {
	return {
		selectedItem: state.items.selectedItem,
		price: state.items.price,
	}
}

export default connect(mapStateToProps,null)(SelectedItem)