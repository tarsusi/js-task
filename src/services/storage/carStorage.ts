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

	isFavourited = (car: ICar | null) => {
		const favouriteCars = this.getFavourites();

		return car ? !!favouriteCars.find((favouriteCar) => favouriteCar.stockNumber === car.stockNumber) : false;
	};

	getFavourites = (): ICar[] => {
		const favouriteCars = localStorage.getItem(FAVOURITES);

		return favouriteCars ? JSON.parse(favouriteCars) : [];
	};

	removeFavourite = (car: ICar) => {
		const favouriteCars = this.getFavourites();

		const carIndex = favouriteCars.findIndex((favouriteCar) => favouriteCar.stockNumber === car.stockNumber);

		if (carIndex >= 0) {
			favouriteCars.splice(carIndex, 1);

			localStorage.setItem(FAVOURITES, JSON.stringify(favouriteCars));
		}
	};

	clear = localStorage.clear;
}

export default new CarStorage();
