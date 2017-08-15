import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <App className="app"/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
