import PinCreateViewCtrl from './controller';
import { resetPin } from 'pin/resolve';

export default {
  url: 'create',
  template: `<pin-detail pin='pinCreateViewCtrl.pin' on-submit='pinCreateViewCtrl.create(pin)'></pin-detail>`,
  controller: PinCreateViewCtrl,
  controllerAs: 'pinCreateViewCtrl',
  resolve: {
    resetPin  
  }
};
