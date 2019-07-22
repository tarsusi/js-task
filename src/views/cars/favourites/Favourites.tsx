import * as React from 'react';

import ICar from '../../../common/types/models/ICar';

import List from '../../layout/list/List';

import carStorage from '../../../services/storage/carStorage';

const Favourites: React.FunctionComponent = () => {
	const cars: ICar[] = carStorage.getFavourites();

	return (
		<div className="favourites-container">
			<div className="favourites-title">Favourite cars</div>
			<List cars={cars} />
		</div>
	);
};

export default Favourites;
