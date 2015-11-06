export const find = ($ngRedux, PinActions) => {
  console.log('find')
  $ngRedux.dispatch(PinActions.find());
};
find.$inject = ['$ngRedux', 'PinActions'];

export const findById = ($ngRedux, PinActions, $stateParams) => {
  $ngRedux.dispatch(PinActions.findById($stateParams.id));
};
findById.$inject = ['$ngRedux', 'PinActions', '$stateParams'];
