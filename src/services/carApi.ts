import { get } from './baseApi';

export interface GetCarsParams {
	page?: number;
	sort?: string;
	manufacturer?: string;
	color?: string;
}

export const getCarDetails = async (id: string) => {
	const apiResult = await get(`/api/cars/${id}`);

	if (apiResult.success) {
		return apiResult.data.car;
	}

	return null;
};

export const getCars = async (params: GetCarsParams) => {
	const apiResult = await get(`/api/cars`, {
		params: params || {},
	});

	if (apiResult.success) {
		return {
			cars: apiResult.data.cars,
			totalCarsCount: apiResult.data.totalCarsCount,
			totalPageCount: apiResult.data.totalPageCount,
		};
	}

	return {};
};
