import ICar from '../models/ICar';
import { RouteComponentProps } from 'react-router';

export type RouteParams = {
	color?: string;
	manufacturer?: string;
	page?: string;
	sort?: string;
};

export interface Props extends RouteComponentProps<RouteParams> {}

export interface State {
	cars: ICar[];
	currentPage: number;
	selectedColor: string;
	selectedManufacturer: string;
	selectedSort: string;
	totalCarsCount: number;
	totalPageCount: number;
}
