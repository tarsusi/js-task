import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Show from './Show';

import IRootReducerState from '../../../common/types/store/IRootReducerState';

import { addFavourite, removeFavourite } from '../../../store/actions/favouritesActions';

const mapStateToProps = (state: IRootReducerState) => {
	return {
		favouriteCars: state.favourites.cars,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return bindActionCreators(
		{
			addFavourite,
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
