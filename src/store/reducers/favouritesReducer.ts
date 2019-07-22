import { ADD_FAVOURITE, CLEAR_FAVOURITES, REMOVE_FAVOURITE } from '../../common/constants/actionTypes';
import ICar from '../../common/types/models/ICar';
import carStorage from '../../services/storage/carStorage';

type InitialState = {
	cars: ICar[];
};

const initialState: InitialState = {
	cars: carStorage.getFavourites(),
};

const favourites = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVOURITE:
		case REMOVE_FAVOURITE:
			return {
				cars: action.payload,
			};
		case CLEAR_FAVOURITES:
			return { cars: [] };
		default:
			return state;
	}
};

export default favourites;
