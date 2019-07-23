import ICar from '../models/ICar';

export interface ICarReducerState {
	cars: ICar[];
	details: ICar;
	error: boolean;
	totalCarsCount: number;
	totalPageCount: number;
}

export type CarAction = {
	type: string;
	payload: {
		cars?: ICar[];
		details?: ICar;
		error: boolean;
		totalCarsCount?: number;
		totalPageCount?: number;
	};
};
