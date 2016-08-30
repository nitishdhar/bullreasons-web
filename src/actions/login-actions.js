import * as types from '../actions/action-types';
import * as config from '../config';

export function fetchAuth0Token(auth0lock) {
  return function(dispatch) {
    dispatch({type: types.LOGIN_STARTED});
    // Always check if there is a new hash in URL to update existing token,
    var authHash = auth0lock.parseHash(window.location.hash);
    // Check token expiry
    var now = new Date().getTime();
    var tokenSetupTime = localStorage.getItem('auth0_token_setup_time');
    if(now - tokenSetupTime > config.AUTH0_TOKEN_EXPIRY * 1000) {
      localStorage.removeItem('auth0_token_setup_time');
      localStorage.removeItem('auth0_token');
    }
    // Use the auth0_token if it exists
    var auth0_token = localStorage.getItem('auth0_token');
    // Check hash first to refresh if exists
    if (authHash) {
      if (authHash.id_token) {
        auth0_token = authHash.id_token;
        localStorage.setItem('auth0_token_setup_time', now);
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
