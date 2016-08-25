import * as types from '../actions/action-types';

const initialState = {
  auth0_token: false,
  auth0_fetching: false,
  auth0_error: null,
  auth0_authenticated: false
};

const loginReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.LOGIN_STARTED:
      return {...state, auth0_fetching: true };
    case types.LOGIN_FULFILLED:
      return {...state, auth0_token: action.payload, auth0_fetching: false, auth0_authenticated: true };
    case types.LOGIN_REJECTED:
      return {...state, error: action.payload, auth0_fetching: false, auth0_authenticated: false };
    default:
      return state;
  }
}

export default loginReducer;
