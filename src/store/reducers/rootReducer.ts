import { combineReducers } from 'redux';
import car from './carReducer';
import favourites from './favouritesReducer';
import navFilter from './navFilterReducer';

const rootReducer = combineReducers({
	car,
	favourites,
	navFilter,
});

export default rootReducer;
