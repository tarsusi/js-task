import * as React from 'react';
import { render } from 'react-dom';
import App from './views/App';
import '../server';

import './styles/main.scss';

render(<App />, document.getElementById('root'));
