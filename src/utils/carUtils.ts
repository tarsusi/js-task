import { CAR_FEATURES_SEPARATOR } from '../common/constants/generalConstants';
import ICar from '../common/types/models/ICar';

export const generateCarName = (car: ICar | null): string => {
	if (car) {
		if (car.manufacturerName && car.modelName) {
			return `${car.manufacturerName} ${car.modelName}`;
		}

		if (car.manufacturerName) {
			return car.manufacturerName;
		}
	}

	return '';
};

export const generateCarFeatures = (car: ICar | null): string => {
	const features = [];

	if (car) {
		if (car.stockNumber >= 0) {
			features.push(`Stock # ${car.stockNumber}`);
		}

		if (car.mileage && car.mileage.number && car.mileage.number >= 0 && car.mileage.unit) {
			features.push(`${car.mileage.number} ${car.mileage.unit}`);
		}

		if (car.fuelType) {
			features.push(car.fuelType);
		}

		if (car.color) {
			features.push(car.color);
		}
	}

	return features.join(CAR_FEATURES_SEPARATOR);
};
