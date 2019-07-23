import * as React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from './Footer';

afterEach(cleanup);

describe('<Footer />', () => {
	it('should render "© AUTO1 Group 2019"', () => {
		const { getByText } = render(<Footer />);
		expect(getByText('© AUTO1 Group 2019')).toBeInTheDocument();
	});
});
