import { GET_COLORS, GET_MANUFACTURERS } from '../../common/constants/actionTypes';
import IManufacturer from '../../common/types/models/IManufacturer';
import { ISelectItem } from '../../common/types/components/ISelect';
import { INavFilterReducerState, NavFilterAction } from '../../common/types/store/INavFilterReducer';

const initialState: INavFilterReducerState = {
	colors: [],
	manufacturers: [],
};

const toColorItems = (colors: string[]): ISelectItem[] =>
	colors.map((color) => ({
		key: color,
		value: color,
	}));

const toManufacturerItems = (manufacturers: IManufacturer[]): ISelectItem[] =>
	manufacturers.map((manufacturer) => ({
		key: manufacturer.name,
		value: manufacturer.name,
	}));

const navFilter = (state = initialState, action: NavFilterAction) => {
	switch (action.type) {
		case GET_COLORS:
			return {
				...state,
				colors: toColorItems(action.payload.colors),
			};
		case GET_MANUFACTURERS:
			return {
				...state,
				manufacturers: toManufacturerItems(action.payload.manufacturers),
			};
		default:
			return state;
	}
};

export default navFilter;
