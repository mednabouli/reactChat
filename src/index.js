import React from 'react';
import { render } from 'react-dom';

import App2 from './App2';

import registerServiceWorker from './registerServiceWorker';

render(
  <App2 />,
  document.getElementById('root')
);

registerServiceWorker();
