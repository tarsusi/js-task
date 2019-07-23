import ICar from '../models/ICar';
import { RouteComponentProps } from 'react-router';

import { IndexMapDispatchToProps, IndexMapStateToProps } from '../../../views/cars/index/IndexContainer';

export type RouteParams = {
	color?: string;
	manufacturer?: string;
	page?: string;
	sort?: string;
};

export interface Props
	extends RouteComponentProps<RouteParams>,
		ReturnType<typeof IndexMapDispatchToProps>,
		ReturnType<typeof IndexMapStateToProps> {}

export interface State {
	cars: ICar[];
	currentPage: number;
	selectedColor: string;
	selectedManufacturer: string;
	selectedSort: string;
}
