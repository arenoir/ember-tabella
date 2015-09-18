import Ember from 'ember';
import layout from '../../templates/components/ember-tabella/body-column';
import columnStyle from '../../mixins/column-style';

const {Component, computed} = Ember;

export default Component.extend(columnStyle, {
  layout: layout,
  classNames: 'ember-tabella__body-column',
  classNameBindings: ['column.textAlign', 'column.isFixed:ember-tabella__body-column--fixed'],
  attributeBindings: 'style',

  content: computed('row', 'column', function() {
    let row    = this.get('row');
    let column = this.get('column');
    
    if (!row || !column) {
      return;
    }
    
    return column.getContent(row);
  })
});