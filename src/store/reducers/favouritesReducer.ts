import { ADD_FAVOURITE, CLEAR_FAVOURITES, REMOVE_FAVOURITE } from '../../common/constants/actionTypes';

import { IFavouritesReducerState, FavouritesAction } from '../../common/types/store/IFavouritesReducer';

import carStorage from '../../services/storage/carStorage';

const initialState: IFavouritesReducerState = {
	cars: carStorage.getFavourites(),
};

const favourites = (state = initialState, action: FavouritesAction) => {
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
