import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';

class Page extends Route<RouteProps> {
	render() {
		return (
			<React.Suspense fallback={<React.Fragment />}>
				<>
					<Header />
					<main>
						<Route className="route-container" {...this.props} />
						<Footer />
					</main>
				</>
			</React.Suspense>
		);
	}
}

export default Page;
