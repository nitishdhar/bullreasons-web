import * as types from '../actions/action-types';

const initialState = {
  reasons: []
};

const reasonReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_REASONS_SUCCESS:
      return Object.assign({}, state, { reasons: action.reasons });
    default:
      return state;
  }
}

export default reasonReducer;
