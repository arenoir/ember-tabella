import Ember from 'ember';
import layout from '../../templates/components/ember-tabella/header-row';

const {Component, computed} = Ember;
const {htmlSafe} = Ember.String;

export default Component.extend({
  layout: layout,
  columns: [],
  width: 0,
  height: 0,
  scrollLeft: 0,
  scrollTop: 0,
  classNames: ['ember-tabella__header-row'],
  attributeBindings: ['style'],
  sortedColumn: null,
  isSortReversed: false,
  
  style: computed('width', 'height', function() {
    const width = this.get('width');
    const height = this.get('height');

    return htmlSafe(`width:${width}px;height:${height}px;`);
  }),

  actions: {
    onSort(column, desc) {
      this.sendAction('on-sort', column, desc);
    }
  }
});