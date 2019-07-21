import * as React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { HOME_PAGE, SHOW_PAGE, NOT_FOUND_PAGE } from '../common/constants/routeNames';

import Page from './page/Page';

import Home from './cars/Index';
import Show from './cars/Show';
import NotFound from './not-found/NotFound';

const App = () => {
	return (
		<Router>
			<Switch>
				<Page path={HOME_PAGE} exact component={Home} />
				<Page path={SHOW_PAGE} exact component={Show} />
				<Page path={NOT_FOUND_PAGE} component={NotFound} />
				<Redirect to={NOT_FOUND_PAGE} />
			</Switch>
		</Router>
	);
};

export default App;
