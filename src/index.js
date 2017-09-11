import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Test from '../src/components/Test';
import Container from './components/Container';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './App.css';
// <App className="app"/>

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/chat" component={Container} />
          <Route path="/" component={Landing} />
        </Switch>
        <NavBar/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
