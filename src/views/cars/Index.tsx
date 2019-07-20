import * as React from 'react';
import axios from 'axios';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import List from '../layout/List';
import NavFilter from '../layout/NavFilter';

export const Index = () => {
	return (
		<>
			<Header />
			<main>
				<NavFilter />
				<List />
			</main>
			<Footer />
		</>
	);
};
