import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/user';

import '../App.css';
class Register extends Component {
  state = {
    email: '',
    username: '',
    password: ''
  };

  onUserNamechange = e => {
    this.setState({
      username: e.target.value
    });
  };
  onEmailchange = e => {
    this.setState({ email: e.target.value });
  };
  onPasswordchange = e => {
    this.setState({ password: e.target.value });
  };

  onSubmit = async e => {
    console.log(this.state)
    e.preventDefault();

    try {
      await this.props.register(this.state);
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }

  };

  render() {
    return (
      <div className="register">
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onUserNamechange}
            placeholder="please enter your name"
            value={this.state.username}
          />
          <input
            onChange={this.onEmailchange}
            placeholder="please enter your email"
            value={this.state.email}
          />
          <input
            type="password"
            onChange={this.onPasswordchange}
            placeholder="please enter your password"
            value={this.state.password}
          />
          <button type="submit">enter</button>
        </form>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    appStore: state.user
  };
}

export default connect(mapStateToProps, { register })(Register);

