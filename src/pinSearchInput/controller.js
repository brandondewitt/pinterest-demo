import { pinSelector } from 'pin/selector';
const $inject = ['$scope', '$ngRedux', 'PinActions'];
export default function pinSearchInputCtrl($scope, $ngRedux, PinActions) {
  this.searchTerm = '';
  const unsubscribes = [
    $ngRedux.connect(pinSelector, PinActions)(this)
  ];
  $scope.$on('$destroy', () => unsubscribes.forEach(unsubscribe => unsubscribe()));
  this.search = (params) => {
    this.find(params)
      .catch(response => this.error(response.data));
  }
}
pinSearchInputCtrl.$inject = $inject;
