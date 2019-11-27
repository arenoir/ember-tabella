import { alias, or, readOnly, notEmpty, and } from '@ember/object/computed';
import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { isEqual } from '@ember/utils';
import layout from '../../templates/components/ember-tabella/header-column';
import columnStyle from '../../utils/column-style';

export default Component.extend({
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
  width: alias('column.width'),
  defaultMinWidth: 50,
  minWidth: or('column.minWidth', 'defaultMinWidth'),
  isResizable: readOnly('column.isResizable'),
  sortedColumn: null,
  isSortable: notEmpty('column.sortProperties'),
  isSortReversed: false,
  _isSortReversed: and('isSortReversed', 'isSorted'),

  style: computed('column.{width,isFixed}', 'scrollLeft', function() {
    const width = get(this, 'column.width');
    const isFixed = get(this, 'column.isFixed');
    const scrollLeft = get(this, 'scrollLeft');

    return columnStyle(width, isFixed, scrollLeft);
  }),

  onColumnSort() {},

  isSorted: computed('sortedColumn', 'column', function() {
    const scolumn = get(this, 'sortedColumn');
    const column  = get(this, 'column');

    return isEqual(scolumn, column);
  }),

  sortDirection: computed('isSorted', '_isSortReversed', function() {
    if (!get(this, 'isSorted')) {
      return null;
    }
    if (get(this, '_isSortReversed')) {
      return 'desc';
    }
    return 'asc';
  }),

  sortedClassName: computed('sortDirection', function() {
    const direction = get(this, 'sortDirection');

    if (!direction) {
      return;
    }

    return `ember-tabella__header-column--sorted-${direction}`;
  }),

  actions: {
    resize(offsetX) {
      const mWidth = get(this, 'minWidth');
      const width  = get(this, 'width');

      let nWidth = width + (offsetX || 0);

      if (nWidth <= mWidth) {
        nWidth = mWidth;
      }

      this.set('width', nWidth);
    },

    sort() {
      if (!get(this, 'isSortable')) {
        return;
      }

      const column = get(this, 'column');
      const asc    = get(this, 'isSortReversed');

      get(this, 'onColumnSort')(column, !asc);
    }
  }
});
