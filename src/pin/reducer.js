import {
  FETCH,
  RECEIVE_ALL,
  RECEIVE_ONE,
  RESET_PIN
} from './actions';
export const initialState = {
  loading: false,
  loaded: true,
  list: [],
  listItem: {}
};

export default function pins(state = initialState, action) { //jshint ignore:line
  switch (action.type) {
    case RESET_PIN:
      return Object.assign({}, state, { listItem: {} });
    case FETCH:
      return Object.assign({}, state, { loading: true });
    case RECEIVE_ALL:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        list: action.pins
      });
    case RECEIVE_ONE:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        listItem: action.pin
      });
    default:
      return state;
  }
}
