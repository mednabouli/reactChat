import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import registerServiceWorker from './registerServiceWorker';
import store from './store';



// <App className="app"/>

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
      <Nav/>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/chat" component={Container} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
