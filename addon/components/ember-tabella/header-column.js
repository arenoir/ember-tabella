import { alias, or, readOnly, notEmpty, and } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEqual } from '@ember/utils';
import layout from '../../templates/components/ember-tabella/header-column';
import columnStyle from '../../mixins/column-style';

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
  width: alias('column.width'),
  defaultMinWidth: 50,
  minWidth: or('column.minWidth', 'defaultMinWidth'),
  isResizable: readOnly('column.isResizable'),
  sortedColumn: null,
  isSortable: notEmpty('column.sortProperties'),
  isSortReversed: false,
  _isSortReversed: and('isSortReversed', 'isSorted'),

  onColumnSort() {},

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

      this.get('onColumnSort')(column, !asc);
    }
  }
});
