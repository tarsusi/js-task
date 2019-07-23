import { Dispatch } from 'redux';

import { CLEAR_CAR_DETAILS, GET_CAR_DETAILS, GET_CARS } from '../../common/constants/actionTypes';

import { getCarDetails as getCarDetailsApi, getCars as getCarsApi, GetCarsParams } from '../../services/api/carApi';

export const getCarDetails = (id: string) => {
	return async (dispatch: Dispatch) => {
		const details = await getCarDetailsApi(id);

		if (details) {
			return dispatch({ type: GET_CAR_DETAILS, payload: { error: false, details } });
		}

		return dispatch({ type: GET_CAR_DETAILS, payload: { error: true, details } });
	};
};

export const getCars = (params: GetCarsParams) => {
	return async (dispatch: Dispatch) => {
		const { cars, totalCarsCount, totalPageCount } = await getCarsApi(params);

		if (cars && cars.length) {
			return dispatch({ type: GET_CARS, payload: { error: false, cars, totalCarsCount, totalPageCount } });
		}

		return dispatch({ type: GET_CARS, payload: { error: true, cars: [], totalCarsCount: 0, totalPageCount: 1 } });
	};
};

export const clearCarDetails = () => {
	return { type: CLEAR_CAR_DETAILS, payload: null };
};
