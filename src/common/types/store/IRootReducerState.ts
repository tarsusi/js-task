import { IFavouritesReducerState } from './IFavouritesReducer';
import { INavFilterReducerState } from './INavFilterReducer';

export default interface IRootReducerState {
	favourites: IFavouritesReducerState;
	navFilter: INavFilterReducerState;
}
