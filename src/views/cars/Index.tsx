import * as React from 'react';
import List from '../layout/list/List';
import NavFilter from '../layout/nav-filter/NavFilter';
import ICar from '../../common/types/models/ICar';
import { getCars } from '../../services/carApi';

interface Props {}

interface State {
	cars: ICar[];
}

class Index extends React.Component<Props, State> {
	state = {
		cars: [],
	};

	componentDidMount() {
		this.getCars();
	}

	getCars = async () => {
		const cars = await getCars();

		if (cars && cars.length) {
			this.setState({
				cars,
			});
		}
	};

	render() {
		return (
			<div className="car-index-container">
				<NavFilter onFiltered={console.log} />
				<List cars={this.state.cars} />
			</div>
		);
	}
}

export default Index;
