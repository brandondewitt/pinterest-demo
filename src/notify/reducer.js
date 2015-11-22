import {
  SUCCESS,
  ERROR,
  HIDE
} from './actions'

export const initialState = {
  success: undefined,
  error: undefined
};

export default function notify(state=initialState, action) { //jshint ignore:line
  switch(action.type) {
    case SUCCESS:
      return Object.assign({}, state, {
        success: action.message
      });
    case ERROR:
      return Object.assign({}, state, {
        error: typeof action.message === 'string' ? action.message : JSON.stringify(action.message)
      });
    case HIDE:
      return initialState;
    default:
      return state;
  }
}
