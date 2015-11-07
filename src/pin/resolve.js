export const find = ($ngRedux, PinActions) => {
  $ngRedux.dispatch(PinActions.find());
};
find.$inject = ['$ngRedux', 'PinActions'];

export const findById = ($ngRedux, PinActions, $stateParams) => {
  $ngRedux.dispatch(PinActions.findById($stateParams.id));
};
findById.$inject = ['$ngRedux', 'PinActions', '$stateParams'];

export const resetPin = ($ngRedux, PinActions) => {
  return $ngRedux.dispatch(PinActions.resetPin());
}
