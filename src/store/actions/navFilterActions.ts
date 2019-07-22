import { Dispatch } from 'redux';

import { GET_COLORS, GET_MANUFACTURERS } from '../../common/constants/actionTypes';

import { getColors as getColorsApi, getManufacturers as getManufacturersApi } from '../../services/api/filtersApi';

export const getColors = () => {
	return async (dispatch: Dispatch) => {
		const colors = await getColorsApi();
		return dispatch({ type: GET_COLORS, payload: { colors } });
	};
};

export const getManufacturers = () => {
	return async (dispatch: Dispatch) => {
		const manufacturers = await getManufacturersApi();
		return dispatch({ type: GET_MANUFACTURERS, payload: { manufacturers } });
	};
};
