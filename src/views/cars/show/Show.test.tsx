import * as React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import IndexContainer from '../index/IndexContainer';
import ShowContainer from './ShowContainer';
import NotFound from '../../not-found/NotFound';

import { Link, Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import rootReducer from '../../../store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HOME_PAGE, SHOW_PAGE, NOT_FOUND_PAGE } from '../../../common/constants/routeNames';

// afterEach(cleanup);

export const mountContainerWithRouter = (testRoute: string, linkLabel: string) => {
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

	return render(
		<Provider store={store}>
			<Router>
				<Link to={testRoute}>{linkLabel}</Link>
				<Switch>
					<Route path={HOME_PAGE} exact component={IndexContainer} />
					<Route path={SHOW_PAGE} exact component={ShowContainer} />
					<Route path={NOT_FOUND_PAGE} component={NotFound} />
					<Redirect to={NOT_FOUND_PAGE} />
				</Switch>
			</Router>
			,
		</Provider>,
	);
};

describe('<Show />', () => {
	afterEach(cleanup);

	it('should redirect to 404 if car is not found', async () => {
		const linkLabel = 'Click me for testing routing';
		const testRoute = '/1001/detail';

		const { getByTestId, getByText } = mountContainerWithRouter(testRoute, linkLabel);

		fireEvent.click(getByText(linkLabel));
		const carDetailContainer = await waitForElement(() => getByTestId('auto1-group-not-found'));

		expect(carDetailContainer).toBeDefined();
		expect(window.location.pathname).toBe(NOT_FOUND_PAGE);
	});

	it('should render car manufacturer name', async () => {
		const linkLabel = 'Click me for testing routing';
		const testRoute = '/1/detail';
		const { getByTestId, getByText } = mountContainerWithRouter(testRoute, linkLabel);

		fireEvent.click(getByText(linkLabel));
		const carDetailContainer = await waitForElement(() => getByTestId('auto1-group-car-manufacturer'));

		expect(carDetailContainer).toBeDefined();
	});

	it('should render car model name', async () => {
		const linkLabel = 'Click me for testing routing';
		const testRoute = '/1/detail';

		const { getByTestId, getByText } = mountContainerWithRouter(testRoute, linkLabel);

		fireEvent.click(getByText(linkLabel));
		const carDetailContainer = await waitForElement(() => getByTestId('auto1-group-car-name'));

		expect(carDetailContainer).toBeDefined();
	});

	it('should render car stock number', async () => {
		const linkLabel = 'Click me for testing routing';
		const testRoute = '/1/detail';

		const { getByTestId, getByText } = mountContainerWithRouter(testRoute, linkLabel);

		fireEvent.click(getByText(linkLabel));
		const carDetailContainer = await waitForElement(() => getByTestId('auto1-group-car-stock-number'));

		expect(carDetailContainer).toBeDefined();
	});

	it('should render car mileage', async () => {
		const linkLabel = 'Click me for testing routing';
		const testRoute = '/1/detail';

		const { getByTestId, getByText } = mountContainerWithRouter(testRoute, linkLabel);

		fireEvent.click(getByText(linkLabel));
		const carDetailContainer = await waitForElement(() => getByTestId('auto1-group-car-mileage'));

		expect(carDetailContainer).toBeDefined();
	});

	it('should render car fuel type', async () => {
		const linkLabel = 'Click me for testing routing';
		const testRoute = '/1/detail';

		const { getByTestId, getByText } = mountContainerWithRouter(testRoute, linkLabel);

		fireEvent.click(getByText(linkLabel));
		const carDetailContainer = await waitForElement(() => getByTestId('auto1-group-car-fuel-type'));

		expect(carDetailContainer).toBeDefined();
	});

	it('should render car color', async () => {
		const linkLabel = 'Click me for testing routing';
		const testRoute = '/1/detail';

		const { getByTestId, getByText } = mountContainerWithRouter(testRoute, linkLabel);

		fireEvent.click(getByText(linkLabel));
		const carDetailContainer = await waitForElement(() => getByTestId('auto1-group-car-color'));

		expect(carDetailContainer).toBeDefined();
	});

	it('should render "Save" favorites <Button />', async () => {
		const linkLabel = 'Click me for testing routing';
		const testRoute = '/1/detail';

		const { getByText } = mountContainerWithRouter(testRoute, linkLabel);

		fireEvent.click(getByText(linkLabel));
		const saveButton = await waitForElement(() => getByText('Save'));

		expect(saveButton).toBeDefined();
	});
});
