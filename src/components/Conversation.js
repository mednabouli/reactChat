import React, { Component } from 'react';
import '../App.css';

class Conversation extends Component {
  render() {
    const { messages } = this.props;

    if (!messages) {
      return <p>no message yet</p>
    }

    return (
      <div className="conversation">
        {messages.map((msg, i) => (
          <div key={i}>
            <p className="user">{msg.user}</p>
            <p className="message">{msg.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Conversation;
