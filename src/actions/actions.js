export const selectPrice = (price) => {
	return {
		type: 'SELECT_PRICE',
		payload: {price: price}
	}
}