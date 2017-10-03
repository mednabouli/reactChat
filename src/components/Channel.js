import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRoom, loadChannels } from '../actions/channel';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

class Channel extends Component {
  state = {
    name: ''
  };

  _goTo = route => this.props.history.push(route);

  componentDidMount() {
    // this.props.loadChannels();
  }

  onChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createRoom(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    const {channels} = this.props.messages
    return (

      <div>
        <div className="testdiv">
          {Object.values(channels).map((channel, i) => (
            <ul className="channel-list" key={channel._id}>
              <li className="item" onClick={()=> this._goTo(`/channel/${channel._id}`)}>
              <a className="channel-name">{channel.name}</a>
              </li>
            </ul>
          ))}
        </div>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.message
  };
}

export default withRouter(connect(mapStateToProps, { createRoom, loadChannels })(Channel));
