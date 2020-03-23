const initialState = {
	price : '',
	isSubmitEnabled : true,
}

export const itemReducer = (state = initialState, action) => {
	switch (action.type) {
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
