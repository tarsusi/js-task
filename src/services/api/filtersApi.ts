import { get } from './baseApi';

export const getColors = async () => {
	const apiResult = await get('/api/colors');

	if (apiResult.success) {
		return apiResult.data.colors;
	}

	return [];
};

export const getManufacturers = async () => {
	const apiResult = await get('/api/manufacturers');

	if (apiResult.success) {
		return apiResult.data.manufacturers;
	}

	return [];
};
