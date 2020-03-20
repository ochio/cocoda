const initialState = {
	price : '',
}

export const itemReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_PRICE':
			const price = action.payload.price;
			const newPrice = Object.assign({}, state,{
				price: price
			});
			// console.log(newPrice);
			return newPrice
		default:
			return state;
	}
}