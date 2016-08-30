import React from 'react';
import { connect } from 'react-redux';
import ReasonsList from '../views/reasons-list';
import * as reasonActions from '../../actions/reason-actions';

const mapStateToProps = function(store) {
  return {
    reasons: store.reasons.reasons,
    fetching: store.reasons.fetching,
    error: store.reasons.error,
    auth0_authenticated: store.login.auth0_authenticated,
    auth0_token: store.login.auth0_token
  };
};

const ReasonsListContainer = React.createClass({

  componentDidMount: function() {
    if (this.props.auth0_authenticated) {
      this.props.dispatch(reasonActions.fetchReasons(this.props.auth0_token));
    }
  },

  refreshReasons: function() {
    this.props.dispatch(reasonActions.fetchReasons(this.props.auth0_token));
  },

  render: function() {
    if (!this.props.auth0_authenticated) {
      return <span>Not Logged In</span>
    } else {
      if (this.props.fetching) {
        return <span>Fetching Tweets</span>
      }
      if (this.props.error) {
        return <span>{this.props.error.statusText.toString()}</span>
      }
      return (
        <div>
          <ReasonsList reasons={this.props.reasons} />
          <button onClick={this.refreshReasons}>Refresh Reasons</button>
        </div>
      );
    }
  }
});

export default connect(mapStateToProps)(ReasonsListContainer);
