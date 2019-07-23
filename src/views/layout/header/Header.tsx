import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import AppLogo from '../../../components/app-logo/AppLogo';

import INavLink from '../../../common/types/components/INavLink';
import { HOME_PAGE } from '../../../common/constants/routeNames';
import { Link } from 'react-router-dom';

export const navLinks: INavLink[] = [
	{
		label: 'Purchase',
		to: '/purchase',
	},
	{
		label: 'My Orders',
		to: '/favourites',
	},
	{
		label: 'Sell',
		to: '/sell',
	},
];

const Header = (props: RouteComponentProps) => {
	return (
		<header>
			<AppLogo
				className="home-page-logo"
				onClick={() => {
					if (props.location.pathname !== HOME_PAGE) {
						props.history.push(HOME_PAGE);
					}
				}}
			/>
			<ul className="header-nav">
				{navLinks.map((navLink) => (
					<li className="nav-item" key={navLink.label}>
						<Link to={navLink.to}>{navLink.label}</Link>
					</li>
				))}
			</ul>
		</header>
	);
};

export default withRouter(Header);
