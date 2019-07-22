import { FAVOURITES } from '../../common/constants/generalConstants';
import ICar from '../../common/types/models/ICar';

class CarStorage {
	addFavourites = (car: ICar) => {
		const favouriteCars = this.getFavourites();

		if (!favouriteCars.find((favouriteCar) => favouriteCar.stockNumber === car.stockNumber)) {
			favouriteCars.push(car);
			localStorage.setItem(FAVOURITES, JSON.stringify(favouriteCars));
		}
	};

	getFavourites = (): ICar[] => {
		const favouriteCars = localStorage.getItem(FAVOURITES);

		return favouriteCars ? JSON.parse(favouriteCars) : [];
	};

	isFavourited = (car: ICar) => {
		const favouriteCars = this.getFavourites();

		return favouriteCars.find((favouriteCar) => favouriteCar.stockNumber === car.stockNumber);
	};

	clear = localStorage.clear;
}

export default new CarStorage();
