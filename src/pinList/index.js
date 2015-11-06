import PinList from './directive';
import pinListItem from 'pinListItem';

export default angular
  .module('pin.list', [pinListItem])
  .directive('pinList', PinList)
  .name;
