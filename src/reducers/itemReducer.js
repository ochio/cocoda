const initialState = {
	selectedItem : 'drink',
	price : '400',
}

export const itemReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_ITEM':
			const item = action.payload.selectedItem;
			const newItem = Object.assign({}, state);
			newItem.selectedItem = item
			return newItem;
		
		case 'SELECT_PRICE':
			const price = action.payload.price;
			const newPrice = Object.assign({}, state);
			newPrice.price = price
			return newPrice;

		default:
			return state;
	}
}
