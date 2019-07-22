import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './views/App';
import '../server';

import rootReducer from './store/reducers/rootReducer';

import './styles/main.scss';

const store = createStore(rootReducer, devToolsEnhancer({}));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
