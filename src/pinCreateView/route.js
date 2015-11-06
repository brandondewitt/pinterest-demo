import PinCreateViewCtrl from './controller';

export default {
  url: 'create',
  template: `<pin-detail pin='pinCreateViewCtrl.pin' on-submit='pinCreateViewCtrl.create(pin)'></pin-detail>`,
  controller: PinCreateViewCtrl,
  controllerAs: 'pinCreateViewCtrl'
};
