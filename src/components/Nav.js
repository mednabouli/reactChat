import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/user';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap';
import '../App.css';

class navbarInstance extends Component {
  clearCache = () => {
    console.log('this worked');
    localStorage.removeItem('token');
    this.props.logout();
    this._goTo('/landing');
    window.location.reload();
  };

  _goTo = route => this.props.history.push(route);

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
            <Button onClick={this.clearCache}>Logout</Button>
            <Button onClick={()=> this._goTo('/login')}>Login</Button>
            <Button onClick={()=> this._goTo('/register')}>Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { logout })(navbarInstance));

