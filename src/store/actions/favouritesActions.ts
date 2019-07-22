import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../../common/constants/actionTypes';
import ICar from '../../common/types/models/ICar';
import carStorage from '../../services/storage/carStorage';

export const addFavourite = (car: ICar) => {
	const favourites = carStorage.addFavourites(car);

	return { type: ADD_FAVOURITE, payload: favourites };
};

export const removeFavourite = (car: ICar) => {
	const favourites = carStorage.removeFavourite(car);

	return { type: REMOVE_FAVOURITE, payload: favourites };
};
