import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';

class Page extends Route<RouteProps> {
	render() {
		return (
			<>
				<Header />
				<main>
					<Route {...this.props} />
				</main>
				<Footer />
			</>
		);
	}
}

export default Page;
