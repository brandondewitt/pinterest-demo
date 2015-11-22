import { findById } from 'pin/resolve';
import PinDetailViewCtrl from './controller';

export default {
  url: ':id',
  template: `<pin-detail pin='pinDetailViewCtrl.pin' on-submit='pinDetailViewCtrl.updatePin(pin)' on-delete='pinDetailViewCtrl.destroyPin(id)'></pin-detail>`,
  controller: PinDetailViewCtrl,
  controllerAs: 'pinDetailViewCtrl',
  resolve: {
    findById
  }
};
