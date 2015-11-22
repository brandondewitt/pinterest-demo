import app from './directive';
import pin from 'pin';
import pinSearchInput from 'pinSearchInput';
import notify from 'notify';

export default angular
  .module('app.start', [notify, pin, pinSearchInput])
  .directive('app', app)
  .name;
