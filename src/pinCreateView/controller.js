import { pinSelector } from 'pin/selector';
import { bindActionCreators } from 'redux';
export default class PinDetailViewCtrl {
  static get $inject() { return ['$scope', '$ngRedux', 'PinActions', 'NotifyActions']; }
  constructor($scope, $ngRedux, PinActions, NotifyActions) {
    const unsubscribes = [
      $ngRedux.connect(
        pinSelector,
        dispatch => bindActionCreators(Object.assign({}, PinActions, NotifyActions), dispatch)
      )(this)
    ];
    $scope.$on('$destroy', () => unsubscribes.forEach(unsubscribe => unsubscribe()));
  }

  createPin(pin) {
    this.create(pin)
      .then(() => this.success('Pin created.'))
      .catch(response => this.error(response.data));
  }
}
