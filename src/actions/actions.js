export const selectItem = (item) => {
	return {
		type: 'SELECT_ITEM',
		payload: {selectedItem: item}
	}
}

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