import Ember from 'ember';
import layout from '../../templates/components/ember-tabella/header-column';
import columnStyle from '../../mixins/column-style';

const {Component, computed, isEqual} = Ember;

export default Component.extend(columnStyle, {
  layout: layout,
  scrollLeft: 0,
  scrollTop: 0,

  classNames: ['ember-tabella__header-column'],
  classNameBindings: [
    'isSortable:ember-tabella__header-column--sortable',
    'isSorted:ember-tabella__header-column--sorted',
    'sortedClassName',
    'isResizable:ember-tabella__header-column--resizable',
    'column.isFixed:ember-tabella__header-column--fixed'
  ],
  attributeBindings: ['style'],
  
  column: null,
  width: computed.alias('column.width'),
  minWidth: computed.readOnly('column.minWidth'),
  maxWidth: computed.readOnly('column.maxWidth'),
  isResizable: computed.readOnly('column.isResizable'),
  sortedColumn: null,
  isSortable: computed.notEmpty('column.sortProperties'),
  isSortReversed: false,
  _isSortReversed: computed.and('isSortReversed', 'isSorted'),
  
  isSorted: computed('sortedColumn', 'column', function() {
    let scolumn = this.get('sortedColumn');
    let column  = this.get('column');
    
    return isEqual(scolumn, column);
  }),

  sortDirection: computed('isSorted', '_isSortReversed', function() {
    if (!this.get('isSorted')) {
      return null;
    }
    if (this.get('_isSortReversed')) {
      return 'desc';
    }
    return 'asc';
  }),

  sortedClassName: computed('sortDirection', function() {
    let direction = this.get('sortDirection');

    if (!direction) {
      return;
    }

    return `ember-tabella__header-column--sorted-${direction}`;
  }),

  actions: {
    resize(offsetX) {
      let width  = this.get('width');
      let nWidth = width + (offsetX || 0);

      this.set('width', nWidth);
    },

    sort() {
      if (!this.get('isSortable')) {
        return;
      }

      let column = this.get('column');
      let desc   = !this.get('isSortReversed');

      this.sendAction('on-sort', column, desc);
    }
  }
});