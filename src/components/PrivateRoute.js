import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLogged, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      isLogged
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/landing',
              state: { from: props.location }
            }}
          />}
  />;


  
export default connect(state => ({ 
  isLogged: state.user.isLogged
}))(PrivateRoute);
