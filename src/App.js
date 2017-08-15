import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
// import {socket} from './utls/socket';
import {sendMessage} from './actions/message';
import './App.css';

class App extends Component {
  state = {
    message: ''
  };

  onChange = e => {
    this.setState({ message: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('this works')
    this.props.dispatch(sendMessage(this.state.message));
    this.setState({
      message: ''
    })
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.message}
            onChange={this.onChange}
          />
        </form>
        {this.props.messages.map((msg, i) => (
          <li key={i}> {msg}</li>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    messages: state.message.data
  }
}

export default connect(mapStateToProps, null)(App);
