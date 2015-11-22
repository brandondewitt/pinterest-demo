export const find = ($ngRedux, PinActions, NotifyActions) => {
  return $ngRedux
    .dispatch(PinActions.find())
    .catch(response => $ngRedux.dispatch(NotifyActions.error(response.data)));
};
find.$inject = ['$ngRedux', 'PinActions', 'NotifyActions'];

export const findById = ($ngRedux, $stateParams, PinActions, NotifyActions) => {
  $ngRedux
    .dispatch(PinActions.findById($stateParams.id))
    .catch(response => $ngRedux.dispatch(NotifyActions.error(response.data)));
};
findById.$inject = ['$ngRedux', '$stateParams', 'PinActions', 'NotifyActions'];

export const resetPin = ($ngRedux, PinActions) => {
  return $ngRedux.dispatch(PinActions.resetPin());
}
