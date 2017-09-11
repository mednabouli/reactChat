import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/user';
import '../App.css';

class Navbar extends Component {
  clearCache = () => {
    console.log('this worked');
    localStorage.removeItem('token');
    this.props.logout();
    this._goTo('/landing');
    window.location.reload();
  };

  _goTo = route => this.props.history.push(route);

  render() {
    const styles = {
      display: 'none !important'
    };
    return (
      <div className="navBar">
      <button onClick={this.clearCache}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
