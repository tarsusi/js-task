import * as React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { FAVOURITES_PAGE, HOME_PAGE, SHOW_PAGE, NOT_FOUND_PAGE } from '../common/constants/routeNames';

import Page from './page/Page';

const Favourites = React.lazy(() => import('./cars/favourites/FavouritesContainer'));
const Home = React.lazy(() => import('./cars/index/Index'));
const Show = React.lazy(() => import('./cars/show/ShowContainer'));
const NotFound = React.lazy(() => import('./not-found/NotFound'));

const App = () => {
	return (
		<Router>
			<Switch>
				<Page path={HOME_PAGE} exact component={Home} />
				<Page path={SHOW_PAGE} exact component={Show} />
				<Page path={FAVOURITES_PAGE} exact component={Favourites} />
				<Page path={NOT_FOUND_PAGE} component={NotFound} />
				<Redirect to={NOT_FOUND_PAGE} />
			</Switch>
		</Router>
	);
};

export default App;
