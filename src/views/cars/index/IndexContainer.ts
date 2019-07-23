import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Index from './Index';

import IRootReducerState from '../../../common/types/store/IRootReducerState';

import { getCars } from '../../../store/actions/carActions';

const mapStateToProps = (state: IRootReducerState) => {
	return {
		cars: state.car.cars,
		error: state.car.error,
		totalCarsCount: state.car.totalCarsCount,
		totalPageCount: state.car.totalPageCount,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return bindActionCreators(
		{
			getCars,
		},
		dispatch,
	);
};

export { mapDispatchToProps as IndexMapDispatchToProps };
export { mapStateToProps as IndexMapStateToProps };

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Index);
