import * as types from '../actions/action-types';
import * as config from '../config';
import axios from 'axios';

export function fetchReasons(auth0_token) {
  return function(dispatch) {
    dispatch({type: types.FETCH_REASONS_STARTED});
    axios.get(config.BR_API_HOST + '/reasons', { headers: { 'Authorization': `Bearer ${auth0_token}` } })
    .then(response => {
      dispatch({type: types.FETCH_REASONS_FULFILLED, payload: response.data})
    })
    .catch(err => {
      dispatch({type: types.FETCH_REASONS_REJECTED, payload: err})
    });
  }
}
