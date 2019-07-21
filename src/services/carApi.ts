import { get } from './baseApi';

export const getCarDetails = async (id: string) => {
	const apiResult = await get(`/api/cars/${id}`);

	if (apiResult.success) {
		return apiResult.data.car;
	}

	return null;
};

export const getCars = async () => {
	const apiResult = await get(`/api/cars`);

	if (apiResult.success) {
		return apiResult.data.cars;
	}

	return [];
};
