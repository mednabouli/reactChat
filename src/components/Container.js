import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Conversation from './Conversation';
import {loadMessages, sendMessage} from '../actions/message';

class Container extends Component {
  state = {
    message: ''
  };

  // componentDidMount(){
  //   this.props.loadMessages()
  // }

  onChange = e => {
    this.setState({ message: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('this works');
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ''
    });
  };

  
  loadMessages = e =>{
    this.props.loadMessages()
  }

  render() {
    console.log("===================================================")
    console.log(this.props.messages)
    console.log("===================================================")
    return (
      <div className="main">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="sidebar col-1-4">
          <ul className="channel-list">
            <li className="item">
              <a className="channel-name">testing</a>
            </li>
            <li className="item">
              <a className="channel-name">testing</a>
            </li>
          </ul>
        </div>
        <div className="chat col-3-4">
          <Conversation messages={this.props.messages} />
          <div className="input-container">
            <form onSubmit={this.onSubmit}>
              <input
                placeholder="enter your message"
                type="text"
                value={this.state.message}
                onChange={this.onChange}
              />
              <button>
                <i className="fa fa-send" />
              </button>
            </form>
          </div>
        </div>
        <div>
        <button onClick={this.loadMessages}>  
        click me
        </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.message.data
  };
}

export default connect(mapStateToProps, {loadMessages, sendMessage})(Container);
