import EmberObject, { get } from '@ember/object';

export default class Column extends EmberObject {
  columnName;
  contentPath;
  minWidth = 25;
  maxWidth;
  isResizable = true;
  textAlign = 'text-align-right';
  templateName = 'ember-tabella/body-column';
  headerTemplateName = 'ember-tabella/header-column';
  width = 150;

  getContent(model) {
    let path = this.contentPath;

    if (path) {
      return get(model, path);
    }
  }
}
