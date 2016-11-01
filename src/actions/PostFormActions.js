import * as types from './actionTypes';

export function disableBtn() {
  return {
    type: types.BUTTON_DISABLED,
    disabled: true
  };
}

export function enableBtn() {
  return {
    type: types.BUTTON_ENABLED,
    disabled: false
  };
}
