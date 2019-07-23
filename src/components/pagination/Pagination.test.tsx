import * as React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Pagination from './Pagination';

afterEach(cleanup);

const firstPageNumber = 1;
const currentPageNumber = 2;
const totalPageNumber = 10;

describe('<Pagination />', () => {
	it('should render "First" page link', () => {
		const { getByText } = render(<Pagination currentPage={currentPageNumber} totalPage={totalPageNumber} />);
		const firstPageLink = getByText('First');

		expect(firstPageLink).toBeDefined();
	});

	it('should render "Previous" page link', () => {
		const { getByText } = render(<Pagination currentPage={currentPageNumber} totalPage={totalPageNumber} />);
		const previousPageLink = getByText('Previous');

		expect(previousPageLink).toBeDefined();
	});

	it('should render "Page 2 of 10"', () => {
		const { getByText } = render(<Pagination currentPage={currentPageNumber} totalPage={totalPageNumber} />);
		const pager = getByText(`Page ${currentPageNumber} of ${totalPageNumber}`);

		expect(pager).toBeDefined();
	});

	it('should render "Next" page link', () => {
		const { getByText } = render(<Pagination currentPage={currentPageNumber} totalPage={totalPageNumber} />);
		const nextPageLink = getByText('Next');

		expect(nextPageLink).toBeDefined();
	});

	it('should render "Last" page link', () => {
		const { getByText } = render(<Pagination currentPage={currentPageNumber} totalPage={totalPageNumber} />);
		const lastPageLink = getByText('Last');

		expect(lastPageLink).toBeDefined();
	});

	describe('on first page', () => {
		it('should disable "First" page link', () => {
			const { getByText } = render(<Pagination currentPage={firstPageNumber} totalPage={totalPageNumber} />);
			const firstPageLink = getByText('First');

			expect(firstPageLink).toHaveClass('disabled');
		});

		it('should disable "Previous" page link', () => {
			const { getByText } = render(<Pagination currentPage={firstPageNumber} totalPage={totalPageNumber} />);
			const previousPageLink = getByText('Previous');

			expect(previousPageLink).toHaveClass('disabled');
		});

		it('should enable "Next" page link', () => {
			const { getByText } = render(<Pagination currentPage={firstPageNumber} totalPage={totalPageNumber} />);
			const nextPageLink = getByText('Next');

			expect(nextPageLink).not.toHaveClass('disabled');
		});
	});

	describe('on not last page and not first page', () => {
		it('should enable "First" page link', () => {
			const { getByText } = render(<Pagination currentPage={currentPageNumber} totalPage={totalPageNumber} />);
			const firstPageLink = getByText('First');

			expect(firstPageLink).not.toHaveClass('disabled');
		});

		it('should enable "Previous" page link', () => {
			const { getByText } = render(<Pagination currentPage={currentPageNumber} totalPage={totalPageNumber} />);
			const previousPageLink = getByText('Previous');

			expect(previousPageLink).not.toHaveClass('disabled');
		});

		it('should enable "Next" page link', () => {
			const { getByText } = render(<Pagination currentPage={currentPageNumber} totalPage={totalPageNumber} />);
			const nextPageLink = getByText('Next');

			expect(nextPageLink).not.toHaveClass('disabled');
		});

		it('should enable "Last" page link', () => {
			const { getByText } = render(<Pagination currentPage={currentPageNumber} totalPage={totalPageNumber} />);
			const lastPageLink = getByText('Last');

			expect(lastPageLink).not.toHaveClass('disabled');
		});
	});

	describe('on last page', () => {
		it('should disable "Next" page link', () => {
			const { getByText } = render(<Pagination currentPage={totalPageNumber} totalPage={totalPageNumber} />);
			const nextPageLink = getByText('Next');

			expect(nextPageLink).toHaveClass('disabled');
		});

		it('should disable "Last" page link', () => {
			const { getByText } = render(<Pagination currentPage={totalPageNumber} totalPage={totalPageNumber} />);
			const lastPageLink = getByText('Last');

			expect(lastPageLink).toHaveClass('disabled');
		});
	});
});
