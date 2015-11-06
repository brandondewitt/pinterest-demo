import PinListCtrl from './controller';

export default function pinListDirective() {
  return {
    scope: {
      pins: '='
    },
    controller: PinListCtrl,
    controllerAs: 'pinListCtrl',
    bindToController: true,
    template: `
      <div layout='row' layout-wrap>
        <pin-list-item flex='25' pin='pin' ng-repeat='pin in pinListCtrl.pins'><pin-list-item>
      </div>
    `
  };
}
