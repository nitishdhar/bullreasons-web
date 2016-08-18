import * as types from '../actions/action-types';

const initialState = {
  reasons: [],
  fetching: false,
  error: null
};

const reasonReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.FETCH_REASONS_STARTED:
      return {...state, fetching: true };
    case types.FETCH_REASONS_FULFILLED:
      return {...state, reasons: action.payload, fetching: false };
    case types.FETCH_REASONS_REJECTED:
      return {...state, error: action.payload, fetching: false };
    default:
      return state;
  }
}

export default reasonReducer;
