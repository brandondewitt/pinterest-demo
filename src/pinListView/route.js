import { find } from 'pin/resolve';
import PinListViewCtrl from './controller';
export default {
  url: '',
  template: `
    <div>
      <pin-list pins='pinListViewCtrl.pins'></pin-list>
      <md-button ui-sref='pin.create' style='position: fixed;bottom: 15px;right: 15px;' class="md-fab md-accent md-hue-2 add-pin" aria-label="new pin">+</md-button>
    </div>
  `,
  controller: PinListViewCtrl,
  controllerAs: 'pinListViewCtrl',
  resolve: {
    find
  }
};
