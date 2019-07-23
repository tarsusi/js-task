import { IFavouritesReducerState } from './IFavouritesReducer';
import { INavFilterReducerState } from './INavFilterReducer';
import { ICarReducerState } from './ICarReducer';

export default interface IRootReducerState {
	car: ICarReducerState;
	favourites: IFavouritesReducerState;
	navFilter: INavFilterReducerState;
}
