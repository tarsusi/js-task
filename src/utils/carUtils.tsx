import * as React from 'react';

import { CAR_FEATURES_SEPARATOR } from '../common/constants/generalConstants';
import ICar from '../common/types/models/ICar';

export const generateCarName = (car: ICar | null) => {
	return (
		(car && (
			<>
				<span data-testid="auto1-group-car-manufacturer">{car.manufacturerName}</span>{' '}
				<span data-testid="auto1-group-car-name">{car.modelName}</span>
			</>
		)) || <React.Fragment />
	);
};

export const generateCarFeatures = (car: ICar | null) => {
	return (
		car && (
			<>
				<span data-testid="auto1-group-car-stock-number">
					{car.stockNumber >= 0 && `Stock # ${car.stockNumber}`}
				</span>
				{CAR_FEATURES_SEPARATOR}
				<span data-testid="auto1-group-car-mileage">
					{car.mileage &&
						car.mileage.number &&
						car.mileage.number >= 0 &&
						car.mileage.unit &&
						`${car.mileage.number} ${car.mileage.unit}`}
				</span>
				{CAR_FEATURES_SEPARATOR}
				<span data-testid="auto1-group-car-fuel-type">{car.fuelType}</span>
				{CAR_FEATURES_SEPARATOR}
				<span data-testid="auto1-group-car-color">{car.color}</span>
			</>
		)
	);
};
