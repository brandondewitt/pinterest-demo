import PinActions from './actions';
import PinResource from './resource';
import config from './config';

import pinListView from 'pinListView';
import pinDetailView from 'pinDetailView';

export default angular
  .module('pin', [pinListView, pinDetailView])
  .factory('PinActions', PinActions)
  .service('PinResource', PinResource)
  .config(config)
  .name;
