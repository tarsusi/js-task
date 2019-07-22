import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const get = (url: string, config?: AxiosRequestConfig) =>
	axios
		.get(url, config)
		.then((result: AxiosResponse) => {
			if (result && result.status === 201) {
				return {
					success: true,
					data: result.data,
				};
			}

			return {
				success: false,
				data: null,
			};
		})
		.catch((error) => {
			console.log(error);
			return {
				success: false,
				data: null,
			};
		});
