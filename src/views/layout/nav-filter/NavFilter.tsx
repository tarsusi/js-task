import * as React from 'react';

import Button from '../../../components/button/Button';
import Select from '../../../components/select/Select';

import { ISelectItem } from '../../../common/types/components/ISelect';
import { Props as NavFilterProps, State as NavFilterState } from '../../../common/types/views/INavFilter';

class NavFilter extends React.Component<NavFilterProps, NavFilterState> {
	state = {
		selectedColor: this.props.selectedColor || '',
		selectedManufacturer: this.props.selectedManufacturer || '',
	};

	componentDidMount() {
		this.props.getColors();
		this.props.getManufacturers();
	}

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

	render() {
		const { selectedColor, selectedManufacturer } = this.state;
		const { colors, manufacturers } = this.props;

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
