import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/message';
import { Link } from 'react-router-dom';
import '../App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Conversation from './Conversation';

class Container extends Component {
  state = {
    message: ''
  };

  onChange = e => {
    this.setState({ message: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('this works');
    this.props.dispatch(sendMessage(this.state.message));
    this.setState({
      message: ''
    });

    const chatContainer = document.getElementsByClassName('conversation');

    function scroll() {
      console.log('this works');
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    scroll();
  };

  render(){
    return(
      <div className="main">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
      <div className="sidebar col-1-4"> 
      <ul className="channel-list">
      <li className="item">
      <a className="channel-name">
      testing
      </a>      
      </li>
      <li className="item">
      <a className="channel-name">
      testing
      </a>      
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.message.data
  };
}

export default connect(mapStateToProps, null)(Container);