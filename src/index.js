import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
// import App from './App';
import Container from './components/Container';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './App.css';
// <App className="app"/>

ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
