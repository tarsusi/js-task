import { CLEAR_CAR_DETAILS, GET_CAR_DETAILS, GET_CARS } from '../../common/constants/actionTypes';

import { ICarReducerState, CarAction } from '../../common/types/store/ICarReducer';

const initialState: ICarReducerState = {
	details: {
		color: '',
		fuelType: '',
		manufacturerName: '',
		mileage: {
			number: -1,
			unit: '',
		},
		modelName: '',
		pictureUrl: '',
		stockNumber: -1,
	},
	cars: [],
	totalCarsCount: 0,
	totalPageCount: 1,
	error: true,
};

const favourites = (state = initialState, action: CarAction) => {
	switch (action.type) {
		case GET_CARS:
			return {
				...state,
				cars: action.payload.cars,
				error: action.payload.error,
				totalCarsCount: action.payload.totalCarsCount,
				totalPageCount: action.payload.totalPageCount,
			};
		case GET_CAR_DETAILS:
			return {
				...state,
				error: action.payload.error,
				details: action.payload.details || initialState.details,
			};
		case CLEAR_CAR_DETAILS:
			return {
				...state,
				details: initialState.details,
			};
		default:
			return state;
	}
};

export default favourites;
