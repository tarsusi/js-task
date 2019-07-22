import * as React from 'react';
import { parse, stringify } from 'query-string';

import List from '../../layout/list/List';
import NavFilter from '../../layout/nav-filter/NavFilter';

import { PAGINATION_LIMIT, SORT_ITEMS } from '../../../common/constants/generalConstants';
import { Props, RouteParams, State } from '../../../common/types/views/IIndex';
import { ISelectItem } from '../../../common/types/components/ISelect';

import { HOME_PAGE } from '../../../common/constants/routeNames';

import { getCars, GetCarsParams } from '../../../services/api/carApi';

import Pagination from '../../../components/pagination/Pagination';
import Select from '../../../components/select/Select';

class Index extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		const queryParams: RouteParams = parse(props.location.search);

		this.state = {
			cars: [],
			currentPage: Number(queryParams.page) || 1,
			selectedSort: (queryParams.sort && queryParams.sort.toUpperCase()) || SORT_ITEMS[0].key,
			selectedColor: queryParams.color || '',
			selectedManufacturer: queryParams.manufacturer || '',
			totalCarsCount: 0,
			totalPageCount: 1,
		};
	}

	componentDidMount() {
		this.getCars();
	}

	generateSubtitle = () => {
		const { cars, totalCarsCount } = this.state;
		const carsCount = Math.min(cars.length, PAGINATION_LIMIT);

		return `Showing ${carsCount} of ${totalCarsCount} results`;
	};

	generateQueryParams = (): GetCarsParams => {
		const { currentPage, selectedColor, selectedSort, selectedManufacturer } = this.state;
		const params: GetCarsParams = {
			page: currentPage,
		};

		if (selectedSort !== SORT_ITEMS[0].key) {
			params.sort = selectedSort.toLowerCase();
		}

		if (selectedColor) {
			params.color = selectedColor;
		}

		if (selectedManufacturer) {
			params.manufacturer = selectedManufacturer;
		}

		return params;
	};

	getCars = async () => {
		const generatedParams = this.generateQueryParams();

		const carResult = await getCars(generatedParams);

		this.props.history.push({
			pathname: HOME_PAGE,
			search: stringify(generatedParams),
		});

		if (carResult && carResult.totalCarsCount) {
			this.setState({
				cars: carResult.cars,
				totalCarsCount: carResult.totalCarsCount,
				totalPageCount: carResult.totalPageCount,
			});
		}
	};

	onFiltered = (selectedColor: string, selectedManufacturer: string) => {
		this.setState(
			{
				currentPage: 1,
				selectedColor,
				selectedManufacturer,
			},
			this.getCars,
		);
	};

	onPageChanged = (currentPage: number) => {
		this.setState(
			{
				currentPage,
			},
			this.getCars,
		);
	};

	onSortSelected = (item: ISelectItem) => {
		this.setState(
			{
				currentPage: 1,
				selectedSort: item.value,
			},
			this.getCars,
		);
	};

	render() {
		const { cars, currentPage, selectedColor, selectedManufacturer, selectedSort, totalPageCount } = this.state;
		const subtitle = this.generateSubtitle();

		return (
			<div className="car-index-container">
				<NavFilter
					onFiltered={this.onFiltered}
					selectedColor={selectedColor}
					selectedManufacturer={selectedManufacturer}
				/>
				<div className="car-index-main-wrapper">
					<div className="car-list-header-container">
						<div className="car-list-title-container">
							<div className="car-list-title">Available cars</div>
							<div className="car-list-subtitle">{subtitle}</div>
						</div>
						<div className="car-list-sort-container">
							<label className="car-list-sort-label">Sort by</label>
							<Select
								className="car-list-sort-select"
								items={SORT_ITEMS}
								onSelect={this.onSortSelected}
								placeholder="All car colors"
								selectedItem={selectedSort}
							/>
						</div>
					</div>
					<List cars={cars} />
					<Pagination currentPage={currentPage} totalPage={totalPageCount} onChanged={this.onPageChanged} />
				</div>
			</div>
		);
	}
}

export default Index;
