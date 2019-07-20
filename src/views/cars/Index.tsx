import * as React from 'react';
import axios from 'axios';
import List from '../layout/List';
import NavFilter from '../layout/NavFilter';
import { Link } from 'react-router-dom';

const Index = () => {
	return (
		<div className="car-index-container">
			<NavFilter />
			<List />
			<Link to="/1/detail">Show</Link>
		</div>
	);
};

export default Index;
