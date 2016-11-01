import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postFormReducer(state = initialState, action) {

  switch (action.type) {
    case types.BUTTON_DISABLED:
      return Object.assign({}, state, {
        disabled: true
      });
    case types.BUTTON_ENABLED:
      return Object.assign({}, state, {
        disabled: false
      });
    default:
      return state;
  }
}
