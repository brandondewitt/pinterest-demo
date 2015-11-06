import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';

import 'angular-material/angular-material.css';

import main from 'main';
import config from './config';

angular
  .module('app', [
    uiRouter,
    ngRedux,
    ngAria,
    ngAnimate,
    ngMaterial,
    main
  ])
  .config(config);
