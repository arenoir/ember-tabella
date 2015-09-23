import Ember from 'ember';
import layout from '../../templates/components/ember-tabella/header-column';
import columnStyle from '../../mixins/column-style';

const {Component, computed, isEmpty, isEqual} = Ember;

export default Component.extend(columnStyle, {
  layout: layout,
  scrollLeft: 0,
  scrollTop: 0,

  classNames: ['ember-tabella__header-column'],
  classNameBindings: [
    'isSortable:ember-tabella__header-column--sortable',
    'isSorted:ember-tabella__header-column--sorted',
    '_isSortReversed:ember-tabella__header-column--sorted-desc',
    'isResizable:ember-tabella__header-column--resizable',
    'column.isFixed:ember-tabella__header-column--fixed'
  ],
  attributeBindings: ['style'],
  
  column: null,
  width: computed.alias('column.width'),
  minWidth: computed.readOnly('column.minWidth'),
  maxWidth: computed.readOnly('column.maxWidth'),
  isResizable: computed.readOnly('column.isResizable'),
  sortProperties: [],
  isSortable: computed.notEmpty('column.sortProperties'),
  isSortReversed: false,
  _isSortReversed: computed.and('isSortReversed', 'isSorted'),
  
  isSorted: computed('sortProperties', 'column.sortProperties', function() {
    let sp = this.get('sortProperties');
    let csp = this.get('column.sortProperties');

    if (isEmpty(csp)) {
      return false;
    }

    return isEqual(sp.toString(), csp.toString());
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

      let sort = this.get('column.sortProperties');

      this.sendAction('on-sort', sort);
    }
  }
});