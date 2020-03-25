const initialState = {
	selectedItem : 'drink',
	price : '400',
	isSubmitEnabled : true,
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

		case 'CHECKED':
			const canSubmit = action.payload.isSubmitEnabled;
			const validateSubmit = Object.assign({}, state,{
				isSubmitEnabled: canSubmit
			});
			console.log(validateSubmit.isSubmitEnabled);
			return validateSubmit

		default:
			return state;
	}
}
