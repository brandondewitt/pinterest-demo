import app from './directive';
import pin from 'pin';

export default angular
  .module('app.start', [pin])
  .directive('app', app)
  .name;
