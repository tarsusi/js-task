import IManufacturer from '../models/IManufacturer';
import { ISelectItem } from '../components/ISelect';

export interface INavFilterReducerState {
	colors: ISelectItem[];
	manufacturers: ISelectItem[];
}

export type NavFilterAction = {
	type: string;
	payload: {
		colors: string[];
		manufacturers: IManufacturer[];
	};
};
