import PinDetailCtrl from './controller';

export default function () {
  return {
    scope: {
      pin: '=',
      onSubmit: '&',
      onDelete: '&'
    },
    controller: PinDetailCtrl,
    controllerAs: 'pinDetailCtrl',
    bindToController: true,
    template: `
      <div layout='row'>
        <pin-form
          flex='30'
          pin='pinDetailCtrl.pin'
          on-submit='pinDetailCtrl.onSubmit({pin: pin})'
          on-delete='pinDetailCtrl.onDelete({id: id})'></pin-form>
        <pin-list-item flex-offset='15' flex='30' pin='pinDetailCtrl.pin'></pin-list-item>
      </div>
    `
  };
}
