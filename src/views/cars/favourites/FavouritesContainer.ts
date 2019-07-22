import { connect } from 'react-redux';

import Favourites from './Favourites';

import IRootReducerState from '../../../common/types/store/IRootReducerState';

const mapStateToProps = (state: IRootReducerState) => {
	return {
		cars: state.favourites.cars,
	};
};

export default connect(
	mapStateToProps,
	{},
)(Favourites);
