import React, { Component } from 'react';
import '../App.css';

class Conversation extends Component {
  render() {
    const { messages } = this.props;

    const renderArray = [];

    messages.forEach(msg => {
      if (msg.text) {
        renderArray.push(msg.text);
      } else {
        renderArray.push(msg);
      }
    });

    return (
      <div className="conversation">
        {renderArray.map((msg, i) => (
          <p className="message" key={i}>
            {msg}
          </p>
        ))}
      </div>
    );
  }
}

export default Conversation;
