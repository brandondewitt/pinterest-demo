import PinListItemCtrl from './controller';
export default function () {
  return {
    scope: {
      pin: '='
    },
    controller: PinListItemCtrl,
    controllerAs: 'pinListItemCtrl',
    bindToController: true,
    template: `
      <md-card style='min-height: 200px;cursor: pointer;'  ui-sref='pin.detail({id: pinListItemCtrl.pin.id})'>
        <img ng-src={{pinListItemCtrl.pin.image}} class='md-card-image'/>
        <md-card-content>
          <p>{{pinListItemCtrl.pin.description}}</p>
        </md-card-content>
      </md-card>
    `
  };
}
