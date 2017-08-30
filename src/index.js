import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Test from '../src/components/Test';
import Container from './components/Container';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './App.css';
// <App className="app"/>

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/something" component={Test} />
        <Route path="/" component={Container} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
