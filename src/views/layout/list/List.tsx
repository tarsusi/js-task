import * as React from 'react';
import { Props as ListProps } from '../../../common/types/views/IList';

import AppLink from '../../../components/app-link/AppLink';

import { generateCarFeatures, generateCarName } from '../../../utils/carUtils';

const List: React.FunctionComponent<ListProps> = (props) => {
	return (
		<div className="car-list-container" data-testid="auto1-group-car-list">
			{props.cars.map((car) => (
				<div className="car-list-item-wrapper" key={car.stockNumber} data-testid="auto1-group-car-list-item">
					<div className="car-picture-container">
						<img
							className="car-picture"
							src={car.pictureUrl}
							alt={`${car.manufacturerName} ${car.modelName}`}
						/>
					</div>
					<div className="car-list-item-container">
						<div className="car-list-item-name" data-testid="auto1-group-car-name">
							{generateCarName(car)}
						</div>
						<div className="car-list-item-features" data-testid="auto1-group-car-features">
							{generateCarFeatures(car)}
						</div>
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
