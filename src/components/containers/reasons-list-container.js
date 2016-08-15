import React from 'react';
import { connect } from 'react-redux';
import ReasonsList from '../views/reasons-list';
import * as reasonApi from '../../api/reason-api';

const ReasonsListContainer = React.createClass({

  componentDidMount: function() {
    reasonApi.getReasons();
  },

  render: function() {
    return (
      <ReasonsList reasons={this.props.reasons} refreshReasons={reasonApi.getReasons}  />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    reasons: store.reasonState.reasons
  };
};

export default connect(mapStateToProps)(ReasonsListContainer);
