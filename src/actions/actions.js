export const selectPrice = (price) => {
	return {
		type: 'SELECT_PRICE',
		payload: {price: price}
	}
}

export const checked = (bool) => {
	return {
		type: 'CHECKED',
		payload: {isSubmitEnabled: bool}
	}
}