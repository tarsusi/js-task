import * as React from 'react';

import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NavFilter from './NavFilter';
import { getColors, getManufacturers } from '../../../store/actions/navFilterActions';

afterEach(cleanup);

describe('<NavFilter />', () => {
	it('should render "Color" <Label />', () => {
		const { getByText } = render(
			<NavFilter
				colors={[]}
				manufacturers={[]}
				onFiltered={() => {}}
				getColors={getColors}
				getManufacturers={getManufacturers}
			/>,
		);

		const colorLabel = getByText('Color');

		expect(colorLabel).toBeDefined();
	});

	it('should render colors <Select />', () => {
		const { getByText } = render(
			<NavFilter
				colors={[]}
				manufacturers={[]}
				onFiltered={() => {}}
				getColors={getColors}
				getManufacturers={getManufacturers}
			/>,
		);

		const colorSelect = getByText('All car colors');

		expect(colorSelect).toBeDefined();
		expect(colorSelect).toHaveClass('select-title');
	});

	it('should render "Manufacturer" <Label />', () => {
		const { getByText } = render(
			<NavFilter
				colors={[]}
				manufacturers={[]}
				onFiltered={() => {}}
				getColors={getColors}
				getManufacturers={getManufacturers}
			/>,
		);

		const manufacturerLabel = getByText('Manufacturer');

		expect(manufacturerLabel).toBeDefined();
	});

	it('should render manufacturers <Select />', () => {
		const { getByText } = render(
			<NavFilter
				colors={[]}
				manufacturers={[]}
				onFiltered={() => {}}
				getColors={getColors}
				getManufacturers={getManufacturers}
			/>,
		);

		const manufacturerSelect = getByText('All manufacturers');

		expect(manufacturerSelect).toBeDefined();
		expect(manufacturerSelect).toHaveClass('select-title');
	});

	it('should render "Filter" <Button />', () => {
		const { container } = render(
			<NavFilter
				colors={[]}
				manufacturers={[]}
				onFiltered={() => {}}
				getColors={getColors}
				getManufacturers={getManufacturers}
			/>,
		);

		const filterButton = container.querySelector('button');

		expect(filterButton).toBeDefined();
		expect(filterButton).toHaveTextContent('Filter');
	});
});
