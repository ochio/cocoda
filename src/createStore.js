import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from "redux-logger";
import { itemReducer } from "./reducers/itemReducer";
import { inputReducer } from './reducers/inputReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createStore(){
	const store = reduxCreateStore(
		combineReducers({
			items: itemReducer,
			input: inputReducer
		}),
		composeEnhancers(
			applyMiddleware(
				logger
			)
		)
	)
	return store
}