import * as React from 'react';
import { Props as ListProps } from '../../../common/types/views/IList';

import AppLink from '../../../components/app-link/AppLink';

import { generateCarFeatures, generateCarName } from '../../../utils/carUtils';

const List: React.FunctionComponent<ListProps> = (props) => {
	return (
		<div className="car-list-container">
			{props.cars.map((car) => (
				<div className="car-list-item-wrapper">
					<div className="car-picture-container">
						<img className="car-picture" src={car.pictureUrl} alt={generateCarName(car)} />
					</div>
					<div className="car-list-item-container" key={car.stockNumber}>
						<div className="car-list-item-name">{generateCarName(car)}</div>
						<div className="car-list-item-features">{generateCarFeatures(car)}</div>
						<AppLink label="View details" to={`/${car.stockNumber}/detail`} small />
					</div>
				</div>
			))}
		</div>
	);
};

List.defaultProps = {
	cars: [],
};

export default List;
