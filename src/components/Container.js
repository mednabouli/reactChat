import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
import '../App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Conversation from './Conversation';
import {loadMessages, sendMessage} from '../actions/message';

class Container extends Component {

  state = {
    message: '',
    user: this.props.user.info.username
  };

  componentDidMount(){
    this.props.loadMessages()
  }

  onChange = e => {
    this.setState({ message: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('this works');
    this.props.sendMessage(this.state);
    this.setState({
      message: '',
    });
    scroller.scrollTo('myScrollToElement', {
      smooth: true
    })

    console.log('==================')
    console.log(this.props.user.info.username)
    console.log('==================')
  };

  
  loadMessages = e =>{
    this.props.loadMessages()
  }

  render() {
    return (
      <div className="main">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.props.user.info.username}</h2>
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
              <button className="chat">
                <i className="fa fa-send" />
              </button>
            </form>
            <p name="myScrollToElement"></p>            
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.message.data,
    user: state.user
  };
}

export default connect(mapStateToProps, {loadMessages, sendMessage})(Container);
