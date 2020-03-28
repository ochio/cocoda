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

export const selectType = (type) => {
	return {
		type: 'SELECT_TYPE',
		payload: {type: type}
	}
}

export const inputMessage = (text) => {
	return {
		type: 'INPUT_MESSAGE',
		payload: {message: text}
	}
}

export const inputSign = (text) => {
	return {
		type: 'INPUT_SIGN',
		payload: {sign: text}
	}
}