import pinListViewRoute from 'pinListView/route';
import pinDetailViewRoute from 'pinDetailView/route';
import pinCreateViewRoute from 'pinCreateView/route';
export default [
  {
    name: 'pin',
    state: {
      url: '/',
      abstract: true,
      template: '<ui-view>'
    }
  },
  {
    name: 'pin.list',
    state: pinListViewRoute
  },
  {
    name: 'pin.create',
    state: pinCreateViewRoute
  },
  {
    name: 'pin.detail',
    state: pinDetailViewRoute
  }
];
