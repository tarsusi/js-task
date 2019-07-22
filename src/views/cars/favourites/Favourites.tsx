import * as React from 'react';

import List from '../../layout/list/List';

import IFavouriteReducerState from '../../../common/types/store/IFavouriteReducerState';

class Favourites extends React.Component<IFavouriteReducerState, {}> {
	render() {
		return (
			<div className="favourites-container">
				<div className="favourites-title">Favourite cars</div>
				<List cars={this.props.cars} />
			</div>
		);
	}
}

export default Favourites;
