const $inject = ['$scope', '$ngRedux', '$mdToast', 'NotifyActions'];
export default function NotifyCtrl($scope, $ngRedux, $mdToast, NotifyActions) {
  var toastPosition = {
    top: true,
    right: true,
    bottom: false,
    left: false
  };

  function getToastPosition() {
    return Object.keys(toastPosition)
          .filter(function(pos) { return toastPosition[pos]; })
          .join(' ');
  }

  const mapThisToState = (state) => {
    if (state.notify.success) {
      $mdToast.show({
        template: `
        <md-toast class="md-toast">
          <strong>SUCCESS:</strong>&nbsp;${state.notify.success}
        </md-toast>`,
        position: getToastPosition()
      });
      this.hide();
    }
    if (state.notify.error) {
      console.warn(state.notify.error);
      $mdToast.show({
        template: `
        <md-toast class="md-toast">
          <strong>ERROR:</strong>&nbsp;${state.notify.error}
        </md-toast>`,
        position: getToastPosition()
      });
      this.hide();
    }
    return {};
  }

  const unsubscribe = $ngRedux.connect(mapThisToState, NotifyActions)(this);
  $scope.$on('$destroy', unsubscribe);
}

NotifyCtrl.$inject = $inject;
