import {
  FETCH,
  RECEIVE_ALL,
  RECEIVE_ONE,
  RESET_PIN,
  RECEIVE_PROMISE
} from './actions';
export const initialState = {
  loading: false,
  loaded: true,
  list: [],
  listItem: {},
  promise: undefined
};

export default function pins(state = initialState, action) { //jshint ignore:line
  switch (action.type) {
    case RESET_PIN:
      return Object.assign({}, state, { listItem: {} });
    case FETCH:
      if (state.promise) { state.promise.resolve(); }
      return Object.assign({}, state, { loading: true });
    case RECEIVE_PROMISE:
      return Object.assign({}, state, { promise: action.promise });
    case RECEIVE_ALL:
      state.promise.resolve(action.pins);
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
