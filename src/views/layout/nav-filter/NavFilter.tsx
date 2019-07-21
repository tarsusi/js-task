import * as React from 'react';

import Button from '../../../components/button/Button';
import Select from '../../../components/select/Select';

import { getColors, getManufacturers } from '../../../services/filtersApi';

import { ISelectItem } from '../../../common/types/components/ISelect';
import { Props as NavFilterProps, State as NavFilterState } from '../../../common/types/views/INavFilter';
import IManufacturer from '../../../common/types/models/IManufacturer';

class NavFilter extends React.Component<NavFilterProps, NavFilterState> {
	state = {
		colors: [],
		manufacturers: [],
		selectedColor: this.props.selectedColor || '',
		selectedManufacturer: this.props.selectedManufacturer || '',
	};

	componentDidMount() {
		this.getColors();
		this.getManufacturers();
	}

	getColors = async () => {
		const colors = await getColors();

		if (colors) {
			this.setState({
				colors: this.toColorItems(colors),
			});
		}
	};

	getManufacturers = async () => {
		const manufacturers = await getManufacturers();

		if (manufacturers) {
			this.setState({
				manufacturers: this.toManufacturerItems(manufacturers),
			});
		}
	};

	onColorSelected = (item: ISelectItem) => {
		this.setState({
			selectedColor: item.key,
		});
	};

	onFiltered = () => {
		const { selectedColor, selectedManufacturer } = this.state;

		this.props.onFiltered(selectedColor, selectedManufacturer);
	};

	onManufacturerSelected = (manufacturer: ISelectItem) => {
		this.setState({
			selectedManufacturer: manufacturer.key,
		});
	};

	toColorItems = (colors: string[]): ISelectItem[] =>
		colors.map((color) => ({
			key: color,
			value: color,
		}));

	toManufacturerItems = (manufacturers: IManufacturer[]): ISelectItem[] =>
		manufacturers.map((manufacturer) => ({
			key: manufacturer.name,
			value: manufacturer.name,
		}));

	render() {
		const { colors, manufacturers, selectedColor, selectedManufacturer } = this.state;

		return (
			<aside className="nav-filter-container">
				<label className="nav-filter-label">Color</label>
				<Select
					className="nav-filter-select"
					items={colors}
					onSelect={this.onColorSelected}
					placeholder="All car colors"
					selectedItem={selectedColor}
				/>
				<label className="nav-filter-label">Manufacturer</label>
				<Select
					className="nav-filter-select"
					items={manufacturers}
					onSelect={this.onManufacturerSelected}
					placeholder="All manufacturers"
					selectedItem={selectedManufacturer}
				/>
				<Button className="nav-filter-button" label="Filter" onClick={this.onFiltered} />
			</aside>
		);
	}
}

export default NavFilter;
