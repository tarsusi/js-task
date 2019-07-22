import { combineReducers } from 'redux';
import favourites from './favouritesReducer';

const rootReducer = combineReducers({
	favourites,
});

export default rootReducer;
