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
      PinResource
        .find(params, deferred.promise)
        .then(response => dispatch(receiveAll(response)))
        .catch(response => console.warn(response));
    };
  }

  function findById(id) {
    return dispatch => {
      dispatch({ type: FETCH });
      PinResource
        .findById(id)
        .then(response => dispatch(receiveOne(response)))
        .catch(response => console.warn(response));
    };
  }

  function create(pin) {
    return dispatch => {
      dispatch({ type: FETCH });
      PinResource
        .create(pin)
        .then(() => $state.go('pin.list'))
        .catch(response => console.warn(response));
    };
  }

  function update(pin) {
    return dispatch => {
      dispatch({ type: FETCH });
      PinResource
        .update(pin)
        .then(() => $state.go('pin.list'))
        .catch(response => console.warn(response));
    };
  }

  function destroy(id) {
    return dispatch => {
      PinResource
        .destroy(id)
        .then(() => $state.go('pin.list'))
        .catch(response => console.warn(response));
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
