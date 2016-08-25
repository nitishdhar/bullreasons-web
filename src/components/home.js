import React from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../actions/login-actions';
import * as config from '../config';

const mapStateToProps = function(store) {
  return {
    auth0_token: store.login.auth0_token,
    auth0_fetching: store.login.auth0_fetching,
    auth0_error: store.login.auth0_error,
    auth0_authenticated: store.login.auth0_authenticated
  };
};

const Home = React.createClass({
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
      <div className="home-page">
        <h1>Welcome to Bull Reasons</h1>
        <div className="login-box">
          <a onClick={this.showLock}>Sign In</a>
        </div>
      </div>
    );
  }
});
export default connect(mapStateToProps)(Home);
