import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Show from './Show';

import IRootReducerState from '../../../common/types/store/IRootReducerState';

import { clearCarDetails, getCarDetails } from '../../../store/actions/carActions';
import { addFavourite, removeFavourite } from '../../../store/actions/favouritesActions';

const mapStateToProps = (state: IRootReducerState) => {
	return {
		car: state.car.details,
		error: state.car.error,
		favouriteCars: state.favourites.cars,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return bindActionCreators(
		{
			addFavourite,
			clearCarDetails,
			getCarDetails,
			removeFavourite,
		},
		dispatch,
	);
};

export { mapDispatchToProps as ShowMapDispatchToProps };
export { mapStateToProps as ShowMapStateToProps };

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Show);
