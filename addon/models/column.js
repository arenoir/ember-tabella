import { oneWay } from '@ember/object/computed';
import EmberObject, { get } from '@ember/object';

export default EmberObject.extend({
  columnName: undefined,
  contentPath: undefined,
  minWidth: 25,
  maxWidth: undefined,
  isResizable: true,
  textAlign: 'text-align-right',
  templateName: 'ember-tabella/body-column',
  headerTemplateName: 'ember-tabella/header-column',
  width: oneWay('_width'),
  _width: 150,

  getContent(model) {
    let path = this.contentPath;
    
    if (path) {
      return get(model, path);
    }
  },

});
