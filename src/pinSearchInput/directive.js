import PinSearchInputCtrl from './controller';
export default function pinSearchInput() {
  return {
    controller: PinSearchInputCtrl,
    controllerAs: 'pinSearchInputCtrl',
    template: `
      <md-input-container>
        <label>Search</label>
        <input type='text' ng-model='pinSearchInputCtrl.searchTerm' ng-change='pinSearchInputCtrl.search({search: pinSearchInputCtrl.searchTerm})'/>
      </md-input-container>
    `
  };
}
