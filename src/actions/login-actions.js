import * as types from '../actions/action-types';

export function fetchAuth0Token(auth0lock) {
  return function(dispatch) {
    dispatch({type: types.LOGIN_STARTED});
    // Always check if there is a new hash in URL to update existing token,
    // Save/Update it in local storage
    var authHash = auth0lock.parseHash(window.location.hash);
    var auth0_token = localStorage.getItem('auth0_token');
    if (authHash) {
      if (authHash.id_token) {
        auth0_token = authHash.id_token
        localStorage.setItem('auth0_token', authHash.id_token);
        dispatch({type: types.LOGIN_FULFILLED, payload: authHash.id_token});
      }
      if (authHash.error) {
        dispatch({type: types.LOGIN_REJECTED, payload: authHash.error});
      }
    } else if(auth0_token) {
      // Check if there is an existing JWT in local storage
      dispatch({type: types.LOGIN_FULFILLED, payload: auth0_token});
    } else {
      dispatch({type: types.LOGIN_REJECTED, payload: 'No login information found!'});
    }
  }
}
