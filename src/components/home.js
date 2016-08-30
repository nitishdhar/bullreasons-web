import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = function(store) {
  return {
    auth0_authenticated: store.login.auth0_authenticated
  };
};

const Home = React.createClass({

  render: function() {
    return (
      <div className="home-page">
        <h1>Welcome to Bull Reasons</h1>
        {this.props.auth0_authenticated &&
          <p className="alert alert-success">Great! You are signed in.</p>
        }
        {!this.props.auth0_authenticated &&
          <p className="alert alert-warning">Looks like you are not signed in! Sign In to gain access to all our features.</p>
        }
      </div>
    );
  }
});
export default connect(mapStateToProps)(Home);
