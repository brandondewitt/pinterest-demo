export const FETCH = 'PINS_FETCH';
export const RECEIVE_ALL = 'PINS_RECEIVE_ALL';
export const RECEIVE_ONE = 'PINS_RECEIVE_ONE';
export const RESET_PIN = 'PINS_RESET_ONE';
export const RECEIVE_PROMISE = 'PINS_RECEIVE_PROMISE';

const $inject = ['$state', '$q', 'PinResource'];
export default function PinActions($state, $q, PinResource) {
  function resetPin() {
    return {
      type: RESET_PIN
    };
  }

  function receiveAll(pins) {
    return {
      type: RECEIVE_ALL,
      pins
    };
  }

  function receiveOne(pin) {
    return {
      type: RECEIVE_ONE,
      pin
    };
  }

  function find(params) {
    let deferred = $q.defer();
    return dispatch => {
      dispatch({ type: FETCH });
      dispatch({
        type: RECEIVE_PROMISE,
        promise: deferred
      });
      return PinResource
        .find(params, deferred.promise)
        .then(response => dispatch(receiveAll(response)));
    };
  }

  function findById(id) {
    console.log('findById', id)
    return dispatch => {
      dispatch({ type: FETCH });
      return PinResource
        .findById(id)
        .then(response => dispatch(receiveOne(response)));
    };
  }

  function create(pin) {
    return dispatch => {
      dispatch({ type: FETCH });
      return PinResource
        .create(pin)
        .then(() => $state.go('pin.list'));
    };
  }

  function update(pin) {
    return dispatch => {
      dispatch({ type: FETCH });
      return PinResource
        .update(pin)
        .then(() => $state.go('pin.list'));
    };
  }

  function destroy(id) {
    return dispatch => {
      return PinResource
        .destroy(id)
        .then(() => $state.go('pin.list'));
    };
  }

  return {
    find,
    findById,
    create,
    update,
    destroy,
    resetPin
  };
}
PinActions.$inject = $inject;
