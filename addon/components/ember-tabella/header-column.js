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
  defaultMinWidth: 50,
  minWidth: computed.or('column.minWidth', 'defaultMinWidth'),
  isResizable: computed.readOnly('column.isResizable'),
  sortedColumn: null,
  isSortable: computed.notEmpty('column.sortProperties'),
  isSortReversed: false,
  _isSortReversed: computed.and('isSortReversed', 'isSorted'),
  
  isSorted: computed('sortedColumn', 'column', function() {
    const scolumn = this.get('sortedColumn');
    const column  = this.get('column');
    
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
    const direction = this.get('sortDirection');

    if (!direction) {
      return;
    }

    return `ember-tabella__header-column--sorted-${direction}`;
  }),

  actions: {
    resize(offsetX) {
      const mWidth = this.get('minWidth');
      const width  = this.get('width');
      
      let nWidth = width + (offsetX || 0);

      if (nWidth <= mWidth) {
        nWidth = mWidth;
      }

      this.set('width', nWidth);
    },

    sort() {
      if (!this.get('isSortable')) {
        return;
      }

      const column = this.get('column');
      const asc    = this.get('isSortReversed');

      this.sendAction('on-sort', column, !asc);
    }
  }
});