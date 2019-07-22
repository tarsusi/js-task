import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import NavFilter from './NavFilter';

import IRootReducerState from '../../../common/types/store/IRootReducerState';

import { getColors, getManufacturers } from '../../../store/actions/navFilterActions';

const mapStateToProps = (state: IRootReducerState) => {
	return {
		colors: state.navFilter.colors,
		manufacturers: state.navFilter.manufacturers,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return bindActionCreators(
		{
			getColors,
			getManufacturers,
		},
		dispatch,
	);
};

export { mapDispatchToProps as NavFilterMapDispatchToProps };
export { mapStateToProps as NavFilterMapStateToProps };

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(NavFilter);
