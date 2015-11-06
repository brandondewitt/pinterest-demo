import PinFormCtrl from './controller';
export default function () {
  return {
    scope: {
      pin: '=',
      onSubmit: '&',
      onDelete: '&'
    },
    controller: PinFormCtrl,
    controllerAs: 'pinFormCtrl',
    bindToController: true,
    template: `
      <form>
        <md-input-container>
          <label>Image</label>
          <input ng-model='pinFormCtrl.pin.image'>
        </md-input-container>
        <md-input-container>
          <label>Description</label>
          <input ng-model='pinFormCtrl.pin.description'>
        </md-input-container>
        <div layout='row'>
          <md-button class='md-raised' ng-click='pinFormCtrl.onSubmit({pin: pinFormCtrl.pin})'>Save</md-button>
          <md-button ng-if='pinFormCtrl.pin.id' class='md-raised md-warn' ng-click='pinFormCtrl.onDelete({id: pinFormCtrl.pin.id})'>Delete</md-button>
        </div>
      </form>
    `
  };
}
