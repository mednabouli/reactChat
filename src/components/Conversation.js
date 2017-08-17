import React, { Component } from 'react';
import '../App.css';

class Conversation extends Component{
  render(){
    const {messages} = this.props;
    return(
      <div className="conversation"> 
      {messages.map((msg, i) =>(
        <p className="message" key={i}>
        {msg}
        </p>
      ))}
      </div>
    )
  }
}

export default Conversation;