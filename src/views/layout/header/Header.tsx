import * as React from 'react';
import AppLogo from '../../../components/app-logo/AppLogo';
import INavLink from '../../../common/types/components/INavLink';

const navLinks: INavLink[] = [
	{
		label: 'Purchase',
		to: '/purchase',
	},
	{
		label: 'My Orders',
		to: '/my-orders',
	},
	{
		label: 'Sell',
		to: '/sell',
	},
];

const Header = () => {
	return (
		<header>
			<AppLogo />
			<ul className="header-nav">
				{// TODO replace these links with Router Link components
				navLinks.map((navLink) => (
					<li className="nav-item">
						<span>{navLink.label}</span>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;
