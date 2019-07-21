import * as React from 'react';
import List from '../layout/List';
import NavFilter from '../layout/nav-filter/NavFilter';
import { Link } from 'react-router-dom';

const Index = () => {
	return (
		<div className="car-index-container">
			<NavFilter onFiltered={console.log} />
			<List />
			<Link to="/1/detail">Show</Link>
		</div>
	);
};

export default Index;
