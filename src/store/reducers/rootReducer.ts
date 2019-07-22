import { combineReducers } from 'redux';
import favourites from './favouritesReducer';
import navFilter from './navFilterReducer';

const rootReducer = combineReducers({
	favourites,
	navFilter,
});

export default rootReducer;
