import { htmlSafe } from '@ember/string';
import { A } from '@ember/array';
import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import layout from '../templates/components/ember-tabella';

function calculateWidth(columns) {
  if (isEmpty(columns)) {
    return 0;
  }

  return columns.reduce((function(total, column) {
    return total + column.get('width') || 0;
  }), 0);
}


export default Component.extend({
  layout: layout,
  classNames: ['ember-tabella'],
  numFixedColumns: 0,
  height: 400,
  width: 500,
  headerHeight: 50,
  rowHeight: 30,
  hasHeader: true,
  attributeBindings: ['style'],
  columns: null,
  sortedColumn: null,
  isSortReversed: false,
  scrollLeft: 0,
  scrollTop: 0,
  content: null,

  onColumnClick() {},
  onColumnSort() {},
  onScroll() {},

  didReceiveAttrs() {
    this._super(...arguments);
    this.markFixedColumns();
  },

  markFixedColumns() {
    const columns = get(this, 'fixedColumns');

    columns.setEach('isFixed', true);
  },

  _columns: computed('columns.[]', function() {
    const columns = get(this, 'columns');

    if (isEmpty(columns)) {
      return [];
    }

    return new A(columns);
  }),


  style: computed('height', function() {
    const height = get(this, 'height');

    return htmlSafe(`height:${height}px;`);
  }),


  fixedColumns: computed('columns.[]', 'numFixedColumns', function() {
    let columns = get(this, 'columns') || [];
    let length = get(this, 'numFixedColumns') || 0;

    return new A(columns.slice(0, length));
  }),


  _fixedColumnsWidth: computed('fixedColumns.@each.width', function() {
    return calculateWidth(get(this, 'fixedColumns'));
  }),


  rowWidth: computed('columns.@each.width', function() {
    const columns = get(this, 'columns');

    return calculateWidth(columns);
  }),


  headerRowWith: computed('rowWidth', function() {
    return get(this, 'rowWidth') + 15;//to accommodate scrollbar
  }),


  bodyHeight: computed('height', '_headerHeight', '_footerHeight', function() {
    return get(this, 'height') - (get(this, '_headerHeight') + get(this, '_footerHeight'));
  }),


  _headerHeight: computed('hasHeader', 'headerHeight', function() {
    if (get(this, 'hasHeader')) {
      return get(this, 'headerHeight');
    }

    return 0;
  }),


  _footerHeight: computed('hasFooter', 'footerHeight', function() {
    if (get(this, 'hasFooter')) {
      return get(this, 'footerHeight');
    }

    return 0;
  }),


  actions: {

    updateScrollPosition(left, top) {
      this.setProperties({
        scrollTop: top,
        scrollLeft: left
      });

      if (left !== this._left) {
        this.$('.ember-tabella__header:first').scrollLeft(left);
        this._left = left;
      }

      get(this, 'onScroll')(left, top);
    }
  }
});
