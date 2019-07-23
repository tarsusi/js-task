import ICar from '../models/ICar';

export interface ICarReducerState {
	details: ICar;
	list: ICar[];
	error: boolean;
}

export type CarAction = {
	type: string;
	payload: {
		details?: ICar;
		error: boolean;
		list?: ICar[];
	};
};
