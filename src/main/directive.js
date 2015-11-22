export default function AppDirective() {
  return {
    template: `
      <div>
        <md-toolbar>
          <div class='md-toolbar-tools'>
            <h1 ui-sref='pin.list'>Almost Pinterests</h1>
            <pin-search-input flex style='margin-left: 10px'></pin-search-input>
          </div>
        </md-toolbar>
        <md-content layout-margin layout-padding>
          <ui-view></ui-view>
        </md-content>
      </div>
    `
  };
}
