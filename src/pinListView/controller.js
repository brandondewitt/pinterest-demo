import { pinSelector } from 'pin/selector';
export default class PinListViewCtrl {
  static get $inject() { return ['$scope', '$ngRedux', 'PinActions']; }
  constructor($scope, $ngRedux, PinActions) {
    const unsubscribes = [
      $ngRedux.connect(pinSelector, PinActions)(this)
    ];
    $scope.$on('$destroy', () => unsubscribes.forEach(unsubscribe => unsubscribe()));
    console.log('PinListViewCtrl', this)
  }
}
