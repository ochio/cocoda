const initialState = {
	type : 'Foryou',
	message : 'a',
	sign: 'aa',
}

export const inputReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_TYPE':
			const type = action.payload.type;
			const newType = Object.assign({}, state);
			newType.type = type
			return newType;

		case 'INPUT_MESSAGE':
			const message = action.payload.message;
			const newMessage = Object.assign({}, state);
			newMessage.message = message
			return newMessage;

		case 'INPUT_SIGN':
			const sign = action.payload.sign;
			const newSing = Object.assign({}, state);
			newSing.sign = sign
			return newSing;

		// case 'INPUT_SIGN':
		// 	const sign = action.payload.sign;
		// 	const newSing = Object.assign({}, state);
		// 	newSing.sign = sign
		// 	return newSing;

		default:
			return state;
	}
}
