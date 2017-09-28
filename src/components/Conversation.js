import React, { Component } from 'react';
import '../App.css';

class Conversation extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div className="conversation">
        {messages.map((msg, i) => (
          <div>
          <p className="user">{msg.user}</p>
            <p className="message" key={i}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Conversation;
