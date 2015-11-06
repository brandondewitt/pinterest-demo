export default function AppDirective() {
  return {
    template: `
      <div>
        <md-toolbar>
          <div class='md-toolbar-tools'>
            <h1 ui-sref='pin.list'>Almost Pinterest</h1>
          </div>
        </md-toolbar>
        <md-content layout-margin layout-padding>
          <ui-view></ui-view>
        </md-content>
      </div>
    `
  };
}
