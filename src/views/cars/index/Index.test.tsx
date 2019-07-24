import * as React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import rootReducer from '../../../store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import IndexContainer from './IndexContainer';
import Header from '../../layout/header/Header';
import NavFilter from '../../layout/nav-filter/NavFilter';

import { getColors, getManufacturers } from '../../../store/actions/navFilterActions';

import '../../../styles/main.scss';

afterEach(cleanup);

export const mountContainerWithRouter = (pathToMatch: string = '/') => {
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

	return render(
		<Provider store={store}>
			<Router>
				<Switch>
					<Route to={pathToMatch} component={IndexContainer} />
				</Switch>
			</Router>
			,
		</Provider>,
	);
};

describe('<Index />', () => {
	it('should not render Welcome!', () => {
		const { queryByText } = mountContainerWithRouter('/');
		const element = queryByText('Welcome!');

		expect(element).toBeNull();
	});

	it('should render <NavFilter />', () => {
		const { queryByTestId } = mountContainerWithRouter('/');
		const navFilter = queryByTestId('auto1-group-nav-filter');

		expect(navFilter).toBeDefined();
	});

	it('should change address bar to selected values on "Filter" press', async () => {
		/* Valid combinations:
   ?color=black&manufacturer=BMW
   ?color=black&manufacturer=
   ?color=&manufacturer=BMW
   ?color=&manufacturer=
   ?color=black
   ?manufacturer=BMW
   ?color=
   ?manufacturer=
   ?
  */

		expect(false).toBe(true);
	});

	it('should render sort <Select /> by manufacturer or color', () => {
		const { getByText } = mountContainerWithRouter('/');
		const sortByLabel = getByText('Sort by');
		expect(sortByLabel).toBeDefined();

		const sortByPlaceholder = getByText('None');
		expect(sortByPlaceholder).toBeDefined();
	});

	it('should render "10 of 1000 results"', async () => {
		const { getByText } = mountContainerWithRouter('/');
		const resultText = await waitForElement(() => getByText('Showing 10 of 1000 results'));

		expect(resultText).toBeDefined();
	});

	it('should render <List /> of cars', async () => {
		const { getAllByTestId } = mountContainerWithRouter('/');
		const carListContainer = await waitForElement(() => getAllByTestId('auto1-group-car-list-item'));

		expect(carListContainer.length).toBe(10);
	});

	it('should render favorite cars first', () => {
		expect(false).toBe(true);
	});

	it('should render cars manufacturer and model name', async () => {
		const { getAllByTestId } = mountContainerWithRouter('/');
		const carNames = await waitForElement(() => getAllByTestId('auto1-group-car-name'));

		expect(carNames.length).toBeGreaterThan(1);
	});

	it('should render cars stock number, mileage, fuel type and color', async () => {
		const { getAllByTestId } = mountContainerWithRouter('/');
		const carFeatures = await waitForElement(() => getAllByTestId('auto1-group-car-features'));

		expect(carFeatures.length).toBeGreaterThan(1);
	});

	it('when click on "View details" should navigate to show car page', async () => {
		const { getAllByText } = mountContainerWithRouter('/');
		const viewDetailsButton = await waitForElement(() => getAllByText('View details'));

		fireEvent.click(viewDetailsButton[0]);

		expect(window.location.pathname).toBe('/0/detail');
	});
});
