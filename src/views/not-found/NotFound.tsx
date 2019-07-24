// Component which renders list of items, e.g. car list
import * as React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../../components/app-logo/AppLogo';
import { HOME_PAGE } from '../../common/constants/routeNames';
import AppLink from '../../components/app-link/AppLink';

const NotFound = () => {
	return (
		<div className="not-found-container" data-testid="auto1-group-not-found">
			<AppLogo />
			<div className="not-found-title">404 - Not Found</div>
			<div className="not-found-message">Sorry, the page you are looking for does not exist.</div>
			<div className="not-found-message">
				You can always go back to the <AppLink to={HOME_PAGE} label="homepage" large />.
			</div>
		</div>
	);
};

export default NotFound;
