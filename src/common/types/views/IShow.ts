import { RouteComponentProps } from 'react-router';
import ICar from '../models/ICar';

import { ShowMapDispatchToProps, ShowMapStateToProps } from '../../../views/cars/show/ShowContainer';

type RouteParams = {
	id: string;
};

export interface Props
	extends RouteComponentProps<RouteParams>,
		ReturnType<typeof ShowMapDispatchToProps>,
		ReturnType<typeof ShowMapStateToProps> {}

export interface State {
	car: ICar | null;
}
