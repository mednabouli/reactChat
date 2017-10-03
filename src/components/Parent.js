import React, { Component } from 'react';

class Parent extends Component {
  state = {  }

  componentDidMount() {
    this._getThing();
  }

  _getThing = async () => {
    await this.props.loadingChannels();
    await this.props.loadMessages();
  }

  render() {
    return (
      <div>
        <Channel channel={this.props.channel} />
        <Messages message={this.props.message} />
      </div>
    );
  }
}

export default connect(state => ({ channel: state.channel, message: state.message }))(Parent);

class Message extends Component {
  state = {  }
  render() {
    if (this.props.message.loading) {
      return <h1>Loading</h1>;
    }
    return (
      this.props.message.channels[props].message.map
    );
  }
}

export default Message;