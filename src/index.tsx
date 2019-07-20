import * as React from 'react';
import { render } from 'react-dom';
import { Index } from './views/cars/Index';
import '../server';

import './styles/main.scss';

render(<Index />, document.getElementById('root'));
