import { CLEAR_CAR_DETAILS, GET_CAR_DETAILS } from '../../common/constants/actionTypes';

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
	list: [],
	error: false,
};

const favourites = (state = initialState, action: CarAction) => {
	switch (action.type) {
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
