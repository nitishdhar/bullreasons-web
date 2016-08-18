import * as types from '../actions/action-types';
import axios from 'axios';

export function fetchReasons() {
  return function(dispatch) {
    dispatch({type: types.FETCH_REASONS_STARTED});
    axios.get('https://br-devo-api.herokuapp.com/reasons')
    .then(response => {
      dispatch({type: types.FETCH_REASONS_FULFILLED, payload: response.data})
    })
    .catch(err => {
      dispatch({type: types.FETCH_REASONS_REJECTED, payload: err})
    });
  }
}
