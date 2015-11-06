import rootReducer from 'main/reducer';
import thunk from 'redux-thunk';
const $inject = ['$locationProvider', '$urlRouterProvider', '$ngReduxProvider', '$mdThemingProvider'];
export default function config($locationProvider, $urlRouterProvider, $ngReduxProvider, $mdThemingProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('amber');
}
config.$inject = $inject;
