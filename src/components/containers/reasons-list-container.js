import React from 'react';
import { connect } from 'react-redux';
import ReasonsList from '../views/reasons-list';
import * as reasonActions from '../../actions/reason-actions';

const mapStateToProps = function(store) {
  return {
    reasons: store.reasons.reasons,
    fetching: store.reasons.fetching,
    error: store.reasons.error
  };
};

const ReasonsListContainer = React.createClass({

  componentWillMount: function() {
    this.props.dispatch(reasonActions.fetchReasons());
  },

  refreshReasons: function() {
    this.props.dispatch(reasonActions.fetchReasons());
  },

  render: function() {
    if (this.props.fetching) {
      return <span>Fetching Tweets</span>
    }
    if (this.props.error) {
      return <span>{this.props.error.toString()}</span>
    }
    return (
      <div>
        <ReasonsList reasons={this.props.reasons} />
        <button onClick={this.refreshReasons}>Refresh Reasons</button>
      </div>
    );
  }

});

export default connect(mapStateToProps)(ReasonsListContainer);
