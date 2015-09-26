import Ember from 'ember';
import layout from '../templates/components/ember-tabella';

const {A, Component, computed, observer, isEmpty} = Ember;
const {htmlSafe} = Ember.String;

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
  resolvedContent: [],
  attributeBindings: ['style'],
  columns: null,
  sortedColumn: null,
  isSortReversed: false,
  scrollLeft: 0,
  scrollTop: 0,

  didReceiveAttrs() {
    this._super(...arguments);
    this.markFixedColumns();
  },

  markFixedColumns() {
    let columns = this.get('fixedColumns');
    
    columns.setEach('isFixed', true);
  },

  _columns: computed('columns.[]', function() {
    let columns = this.get('columns');

    if (isEmpty(columns)) {
      return [];
    }

    return new A(columns);
  }),


  _contentChanged: observer('content', function() {
    var _this  = this;
    var content = this.get('content');

    if (content && typeof(content.then) === 'function') {
      content.then(function(_content) {
        _this.set('resolvedContent', _content);
      });
    } else {
      this.set('resolvedContent', content);
    }
  }),


  style: computed('height', function() {
    let height = this.get('height');

    return htmlSafe(`height:${height}px;`);
  }),


  fixedColumns: computed('columns.[]', 'numFixedColumns', function() {
    let columns = this.get('columns') || [];
    let length = this.get('numFixedColumns') || 0;
    
    return new A(columns.slice(0, length));
  }),


  _fixedColumnsWidth: computed('fixedColumns.@each.width', function() {
    return calculateWidth(this.get('fixedColumns'));
  }),

  
  rowWidth: computed('columns.@each.width', function() {
    let columns = this.get('columns');

    return calculateWidth(columns);
  }),


  headerRowWith: computed('rowWidth', function() {
    return this.get('rowWidth') + 15;//to accommodate scrollbar
  }),


  bodyHeight: computed('height', '_headerHeight', '_footerHeight', function() {
    return this.get('height') - (this.get('_headerHeight') + this.get('_footerHeight'));
  }),


  _headerHeight: computed('hasHeader', 'headerHeight', function() {
    if (this.get('hasHeader')) {
      return this.get('headerHeight');
    }

    return 0;
  }),


  _footerHeight: computed('hasFooter', 'footerHeight', function() {
    if (this.get('hasFooter')) {
      return this.get('footerHeight');
    }

    return 0;
  }),


  actions: {

    columnClicked(column, model) {
      this.sendAction('column-clicked', column, model);
    },

    scrollChange(left, top) {
      this.setProperties({
        scrollTop: top,
        scrollLeft: left
      });

      if (left !== this._left) {
        this.$('.ember-tabella__header:first').scrollLeft(left);
        this._left = left;
      }
    },

    onSort(column, desc) {
      this.sendAction('on-sort', column, desc);
    }
  }
});
