import * as React from 'react';

import { Props as ShowProps, State as ShowState } from '../../../common/types/views/IShow';

import { getCarDetails } from '../../../services/carApi';

import { CAR_FEATURES_SEPARATOR } from '../../../common/constants/generalConstants';
import { HOME_PAGE } from '../../../common/constants/routeNames';

import Button from '../../../components/button/Button';

class Show extends React.Component<ShowProps, ShowState> {
	constructor(props: ShowProps) {
		super(props);

		this.state = {
			car: null,
		};
	}

	componentDidMount() {
		const {
			match: {
				params: { id: carId },
			},
		} = this.props;

		this.getCarDetails(carId);
	}

	addToFavourite = () => {
		// TODO add this functionality with localStorage
		console.log(this.state.car);
	};

	getCarDetails = async (carId: string) => {
		const carDetails = await getCarDetails(carId);

		if (carDetails) {
			this.setState({
				car: carDetails,
			});
		} else {
			this.props.history.push(HOME_PAGE);
		}
	};

	generateCarName = (): string => {
		const { car } = this.state;

		if (car !== null) {
			if (car.manufacturerName && car.modelName) {
				return `${car.manufacturerName} ${car.modelName}`;
			}

			if (car.manufacturerName) {
				return car.manufacturerName;
			}
		}

		return '';
	};

	generateCarFeatures = (): string => {
		const { car } = this.state;
		const features = [];

		if (car) {
			if (car.stockNumber >= 0) {
				features.push(`Stock # ${car.stockNumber}`);
			}

			if (car.mileage && car.mileage.number && car.mileage.number >= 0 && car.mileage.unit) {
				features.push(`${car.mileage.number} ${car.mileage.unit}`);
			}

			if (car.fuelType) {
				features.push(car.fuelType);
			}

			if (car.color) {
				features.push(car.color);
			}
		}

		return features.join(CAR_FEATURES_SEPARATOR);
	};

	render() {
		const { car } = this.state;

		const carName = this.generateCarName();
		const carFeatures = this.generateCarFeatures();

		return (
			car && (
				<div className="car-details-container">
					<div className="car-picture-container">
						<img className="car-picture" src={car.pictureUrl} alt={carName} />
					</div>
					<div className="car-details-wrapper">
						<div className="car-details">
							<div className="car-details-name">{carName}</div>
							<div className="car-details-features">{carFeatures}</div>
							{car.stockNumber >= 0 && (
								<div className="car-details-available-message">
									This car is currently available and can be delivered as soon as tomorrow morning.
									Please be aware that delivery times shown in this page are not definitive and may
									change due to bad weather conditions.
								</div>
							)}
						</div>
						<div className="car-save-to-favourite-container">
							<div className="car-save-to-favourite-message">
								If you like this car, click the button and save it in your collection of favourite
								items.
							</div>
							<Button
								className="car-save-to-favourite-button"
								label="Save"
								onClick={this.addToFavourite}
							/>
						</div>
					</div>
				</div>
			)
		);
	}
}

export default Show;
