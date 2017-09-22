import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import Container from './components/Container';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';

import store from './store';

export default class App2 extends Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    persistStore(
      store,
      {
        whitelist: ['user']
      },
      () => this.setState({ isReady: true })
    )
  }

  render() {
    if (!this.state.isReady) {
      return <h2>Loading...</h2>
    }

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/chat" component={Container} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}