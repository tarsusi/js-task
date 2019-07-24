import * as React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import Page from './Page';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import rootReducer from '../../store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

afterEach(cleanup);

export const mountContainerWithRouter = (pathToMatch: string = '/') => {
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

	return render(
		<Provider store={store}>
			<Router>
				<Switch>
					<Route to={pathToMatch} component={Page} />
				</Switch>
			</Router>
			,
		</Provider>,
	);
};

describe('<Index />', () => {
	it('should render <Header />', () => {
		const { getByTestId } = mountContainerWithRouter('/');
		const header = getByTestId('auto1-group-header');
		expect(header).toBeDefined();
	});

	it('should render <Footer /> at the bottom', () => {
		const { getByTestId } = mountContainerWithRouter('/');
		const footer = getByTestId('auto1-group-footer');
		expect(footer).toBeDefined();
	});
});
