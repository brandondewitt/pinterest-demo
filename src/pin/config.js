import routes from './routes';
const $inject = ['$stateProvider'];
export default function config($stateProvider) {
  routes.forEach(route => $stateProvider.state.call($stateProvider, route.name, route.state));
}
config.$inject = $inject;
