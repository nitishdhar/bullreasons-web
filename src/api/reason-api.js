import axios from 'axios';
import store from '../store';
import { getReasonsSuccess } from '../actions/reason-actions';

/**
 * Get all reasons
 */

export function getReasons() {
  return axios.get('http://localhost:3000/reasons')
    .then(response => {
      store.dispatch(getReasonsSuccess(response.data));
      return response;
    });
}
