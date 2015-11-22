import app from './directive';
import pin from 'pin';
import pinSearchInput from 'pinSearchInput';

export default angular
  .module('app.start', [pin, pinSearchInput])
  .directive('app', app)
  .name;
