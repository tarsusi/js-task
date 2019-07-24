import * as React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { APP_LOGO_ALT, APP_LOGO_SRC } from '../../../common/constants/generalConstants';
import INavLink from '../../../common/types/components/INavLink';

import Header, { navLinks } from './Header';

const renderWithRouter = (
	ui: React.ReactElement<any>,
	{ route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => {
	return {
		...render(<Router history={history}>{ui}</Router>),
		// adding `history` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		history,
	};
};

describe('<Header />', () => {
	afterEach(cleanup);

	it('should render <Logo />', () => {
		// https://github.com/testing-library/react-testing-library/issues/251#issuecomment-451263607
		const { getByAltText } = renderWithRouter(<Header />);
		const logoImage = getByAltText(APP_LOGO_ALT);
		const logoSrc = logoImage.getAttribute('src');

		expect(logoImage).toBeVisible();
		expect(logoSrc).toBe(APP_LOGO_SRC);
	});

	it('should render "My Orders" <Link to="/favorites" />', () => {
		const { getByText } = renderWithRouter(<Header />);

		const myOrdersNavLink: INavLink = navLinks[1];
		const myOrdersLink = getByText(myOrdersNavLink.label);

		expect(myOrdersLink.getAttribute('href')).toBe(myOrdersNavLink.to);
	});
});

describe('should stick elements on scroll or resize', () => {
	it('should stick <Header /> always on top', async () => {
		const { getByTestId } = renderWithRouter(<Header />);

		const headerElement = getByTestId('auto1-group-header');

		expect(headerElement).toHaveStyle('position: sticky;');
		expect(headerElement).toHaveStyle('top: 0;');
		expect(headerElement).toHaveStyle('left: 0;');
		expect(headerElement).toHaveStyle('right: 0;');
	});
});
