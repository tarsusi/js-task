import * as React from 'react';

import { Props as ShowProps, State as ShowState } from '../../../common/types/views/IShow';

import carStorage from '../../../services/storage/carStorage';

import { NOT_FOUND_PAGE } from '../../../common/constants/routeNames';

import Button from '../../../components/button/Button';

import { generateCarFeatures, generateCarName } from '../../../utils/carUtils';

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

		this.props.getCarDetails(carId);
	}

	componentDidUpdate(prevProps: ShowProps) {
		if (this.props.error && !prevProps.error) {
			console.log('NOT FOUND TO REDIRECT');
			this.props.history.push(NOT_FOUND_PAGE);
		}
	}

	componentWillUnmount() {
		this.props.clearCarDetails();
	}

	addToFavourite = () => {
		const { car } = this.props;

		if (car) {
			this.props.addFavourite(car);
		}
	};

	removeFavourite = () => {
		const { car } = this.props;

		if (car) {
			this.props.removeFavourite(car);
		}
	};

	renderFavouriteContainer = () => {
		const { car } = this.props;

		return !carStorage.isFavourited(car) ? (
			<>
				<div className="car-save-to-favourite-message">
					If you like this car, click the button and save it in your collection of favourite items.
				</div>
				<Button className="car-save-to-favourite-button" label="Save" onClick={this.addToFavourite} />
			</>
		) : (
			<>
				<div className="car-save-to-favourite-message">
					If you decide to unlike this car, click the button and remove it from your collection of favourite
					items.
				</div>
				<Button className="car-save-to-favourite-button" label="Remove" onClick={this.removeFavourite} />
			</>
		);
	};

	render() {
		const { car, error } = this.props;

		const carName = generateCarName(car);
		const carFeatures = generateCarFeatures(car);

		return (
			car &&
			!error && (
				<div className="car-details-container" data-testid="auto1-group-car-details">
					<div className="car-picture-container">
						<img
							className="car-picture"
							src={car.pictureUrl}
							alt={`${car.manufacturerName} ${car.modelName}`}
						/>
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
						<div className="car-save-to-favourite-container">{this.renderFavouriteContainer()}</div>
					</div>
				</div>
			)
		);
	}
}

export default Show;
