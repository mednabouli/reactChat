import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { scroller } from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
import '../App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Conversation from './Conversation';
import Channel from './Channel';
import { loadMessages, sendMessage } from '../actions/message';
import { joinChannel } from '../actions/channel';

class Container extends Component {
  state = {
    message: '',
    user: this.props.user.info.username,
    loading: true,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadMessages(id);
    this.props.joinChannel(id);
  }

  onChange = e => {
    this.setState({ message: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('this works');
    this.props.sendMessage(
      { message: this.state.message, user: this.state.user },
      this.props.match.params.id,
    );
    this.setState({
      message: '',
    });
    scroller.scrollTo('myScrollToElement', {
      smooth: true,
    });
  };


  render() {
    console.log('====================================');
    console.log('this.props', this.props);
    console.log('====================================');
    if (this.props.loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="wrapper">
        <div className="header">
          <div className="center">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React {this.props.user.info.username}</h2>
          </div>
        </div>
        <div className="channel">
          <Channel />
        </div>
        <div className="chat">
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
            <p name="myScrollToElement" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    messages: state.message.channels[props.match.params.id],
    loading: state.message.loading,
    user: state.user,
  };
}

export default connect(mapStateToProps, {
  loadMessages,
  sendMessage,
  joinChannel,
})(Container);
