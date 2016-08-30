import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap/lib';
import * as loginActions from '../../actions/login-actions';
import * as config from '../../config';

const mapStateToProps = function(store) {
  return {
    auth0_authenticated: store.login.auth0_authenticated
  };
};

const MainLayout = React.createClass({
  componentWillMount: function() {
    // Initiatize Auth0Lock
    this.lock = new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_DOMAIN);
    this.props.dispatch(loginActions.fetchAuth0Token(this.lock));
  },
  showLock: function() {
      this.lock.show();
  },
  render: function() {
    return (
      <div className="app">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Bull Reasons</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/reasons" activeClassName="active">Reasons</Link></li>
            {this.props.auth0_authenticated &&
              <li><a href="javascript:void(0);" onClick={this.showLock} activeClassName="active">Sign Out</a></li>
            }
            {!this.props.auth0_authenticated &&
              <li><a href="javascript:void(0);" onClick={this.showLock} activeClassName="active">Sign In</a></li>
            }
          </Nav>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});
export default connect(mapStateToProps)(MainLayout);
