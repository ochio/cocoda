import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from "redux-logger";
import { itemReducer } from "./reducers/itemReducer";

export default function createStore(){
	const store = reduxCreateStore(
		combineReducers({
			items: itemReducer
		}),
		applyMiddleware(
			logger
		)
	)
	return store
}