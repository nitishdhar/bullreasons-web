import * as types from '../actions/action-types';

export function getReasonsSuccess(reasons) {
  return {
    type: types.GET_REASONS_SUCCESS,
    reasons
  };
}
