import * as React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import rootReducer from '../../../store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import FavouritesContainer from './FavouritesContainer';
import carStorage from '../../../services/storage/carStorage';

afterEach(cleanup);

export const mountContainerWithRouter = (pathToMatch: string = '/') => {
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

	return render(
		<Provider store={store}>
			<Router>
				<Switch>
					<Route to={pathToMatch} component={FavouritesContainer} />
				</Switch>
			</Router>
			,
		</Provider>,
	);
};

describe('<Favourites />', () => {
	it('should render favorite cars first', async () => {
		// add sample car to favourites since localstorage may be empty
		carStorage.addFavourites({
			color: 'yellow',
			fuelType: 'Petrol',
			manufacturerName: 'BMW',
			mileage: {
				number: 78851,
				unit: 'km',
			},
			modelName: '7er',
			pictureUrl: '/images/car.svg',
			stockNumber: 123456,
		});

		const { getByText, getAllByTestId } = mountContainerWithRouter('/favourites');
		const carNames = getByText('Favourite cars');

		expect(carNames).toBeDefined();

		const favouriteCarsInStorage = carStorage.getFavourites();
		const favouriteCarsInPage = await waitForElement(() => getAllByTestId('auto1-group-car-list-item'));

		expect(favouriteCarsInStorage.length).toBe(favouriteCarsInPage.length);
	});
});
