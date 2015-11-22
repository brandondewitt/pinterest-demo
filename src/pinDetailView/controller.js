import { pinSelector } from 'pin/selector';
import { bindActionCreators } from 'redux';
export default class PinDetailViewCtrl {
  static get $inject() { return ['$scope', '$ngRedux', 'PinActions', 'NotifyActions']; }
  constructor($scope, $ngRedux, PinActions, NotifyActions) {
    const unsubscribe = $ngRedux.connect(
      pinSelector,
      dispatch => bindActionCreators(Object.assign({}, PinActions, NotifyActions), dispatch)
    )(this)
    $scope.$on('$destroy', unsubscribe);
  }

  updatePin(pin) {
    this.update(pin)
      .then(() => this.success('Pin updated.'))
      .catch(response => this.error(response.data))
  }

  destroyPin(id) {
    this.destroy(id)
      .then(() => this.success('Pin removed.'))
      .catch(response => this.error(response.data))
  }
}
