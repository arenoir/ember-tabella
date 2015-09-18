import Ember from 'ember';

const {computed, get} = Ember;

export default Ember.Object.extend({
  columnName: undefined,
  contentPath: undefined,
  minWidth: 25,
  maxWidth: undefined,
  isResizable: true,
  textAlign: 'text-align-right',
  templateName: 'ember-tabella/body-column',
  headerTemplateName: 'ember-tabella/header-column',
  width: computed.oneWay('_width'),
  _width: 150,

  getContent(model) {
    let path = this.get('contentPath');
    
    if (path) {
      return get(model, path);
    }
  },

});
