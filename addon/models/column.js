import EmberObject, { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Column extends EmberObject {
  columnName;
  contentPath;
  minWidth = 25;
  maxWidth;
  isResizable = true;
  textAlign = 'text-align-right';
  templateName = 'ember-tabella/body-column';
  headerTemplateName = 'ember-tabella/header-column';

  @tracked width = 150;
  @tracked offsetLeft = 0;

  getContent(model) {
    let path = this.contentPath;

    if (path) {
      return get(model, path);
    }
  }
}
