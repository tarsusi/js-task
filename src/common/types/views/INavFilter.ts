import { ISelectItem } from '../components/ISelect';

export interface Props {
	onFiltered: (color: string, manufacturer: string) => any;
	selectedColor?: string;
	selectedManufacturer?: string;
}

export interface State {
	colors: ISelectItem[];
	manufacturers: ISelectItem[];
	selectedColor: string;
	selectedManufacturer: string;
}
