import * as React from 'react';

import List from '../../layout/list/List';

import { IFavouritesReducerState } from '../../../common/types/store/IFavouritesReducer';

class Favourites extends React.Component<IFavouritesReducerState, {}> {
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
