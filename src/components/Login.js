import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';

import '../App.css';
class Login extends Component {

  componentDidMount(){
   console.log(this.props.appStore)
  }
  state = {
    email: '',
    password: ''
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
      await this.props.login(this.state);
      this.props.history.push('/chat');
    } catch (error) {
      console.log(error);
    }

  };

  render() {
    return (
      <div className="register">
        <form onSubmit={this.onSubmit}>
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

export default connect(mapStateToProps, { login })(Login);

