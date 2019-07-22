import ICar from '../models/ICar';

export interface IFavouritesReducerState {
	cars: ICar[];
}

export type FavouritesAction = {
	type: string;
	payload: ICar[];
};
