import Ember from 'ember';
import layout from '../../templates/components/ember-tabella/header-column';
import columnStyle from '../../mixins/column-style';

const {Component, computed} = Ember;

export default Component.extend(columnStyle, {
  layout: layout,

  classNames: ['ember-tabella__header-column'],
  classNameBindings: [
    'isResizable:ember-tabella__header-column--resizable',
    'column.isFixed:ember-tabella__header-column--fixed'
  ],
  attributeBindings: ['style'],
  
  column: null,
  width: computed.alias('column.width'),
  minWidth: computed.readOnly('column.minWidth'),
  maxWidth: computed.readOnly('column.maxWidth'),
  isResizable: computed.readOnly('column.isResizable'),

  actions: {
    resize(offsetX) {
      let width  = this.get('width');
      let nWidth = width + (offsetX || 0);

      this.set('width', nWidth);
    }
  }
});