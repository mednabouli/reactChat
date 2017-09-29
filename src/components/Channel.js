import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createRoom, loadChannels} from '../actions/channel';

class Channel extends Component {
  state = {
    name: ''
  };

  componentDidMount(){
    this.props.loadChannels()
  }

  onChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createRoom(this.state.name)
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            placeholder="enter channel name"
            value={this.state.name}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.message
  };
}

export default connect(mapStateToProps, { createRoom, loadChannels })(
  Channel
);

