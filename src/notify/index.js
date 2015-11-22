import NotifyDirective from './directive';
import NotifyActions from './actions';
export default angular
  .module('notify', [])
  .factory('NotifyActions', NotifyActions)
  .directive('notify', NotifyDirective)
  .name;
