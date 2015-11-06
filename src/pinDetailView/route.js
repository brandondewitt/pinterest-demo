import { findById } from 'pin/resolve';
import PinDetailViewCtrl from './controller';

export default {
  url: ':id',
  template: `<pin-detail pin='pinDetailViewCtrl.pin' on-submit='pinDetailViewCtrl.update(pin)' on-delete='pinDetailViewCtrl.destroy(id)'></pin-detail>`,
  controller: PinDetailViewCtrl,
  controllerAs: 'pinDetailViewCtrl',
  resolve: {
    findById
  }
};
