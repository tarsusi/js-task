import { RouteComponentProps } from 'react-router';
import ICar from '../models/ICar';

type RouteParams = {
	id: string;
};

export interface Props extends RouteComponentProps<RouteParams> {}

export interface State {
	car: ICar | null;
}
