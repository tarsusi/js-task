import { Dispatch } from 'redux';

import { CLEAR_CAR_DETAILS, GET_CAR_DETAILS } from '../../common/constants/actionTypes';

import { getCarDetails as getCarDetailsApi } from '../../services/api/carApi';

export const getCarDetails = (id: string) => {
	return async (dispatch: Dispatch) => {
		const details = await getCarDetailsApi(id);

		if (details) {
			return dispatch({ type: GET_CAR_DETAILS, payload: { error: false, details } });
		}

		return dispatch({ type: GET_CAR_DETAILS, payload: { error: true, details } });
	};
};

export const clearCarDetails = () => {
	return { type: CLEAR_CAR_DETAILS, payload: null };
};
