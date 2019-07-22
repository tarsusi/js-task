import {
	NavFilterMapDispatchToProps,
	NavFilterMapStateToProps,
} from '../../../views/layout/nav-filter/NavFilterContainer';

export interface Props
	extends ReturnType<typeof NavFilterMapDispatchToProps>,
		ReturnType<typeof NavFilterMapStateToProps> {
	onFiltered: (color: string, manufacturer: string) => any;
	selectedColor?: string;
	selectedManufacturer?: string;
}

export interface State {
	selectedColor: string;
	selectedManufacturer: string;
}
