import Ember from 'ember';
import layout from '../../templates/components/ember-tabella/header-sort-indicator';

const {Component, computed} = Ember;

export default Component.extend({
  layout: layout,
  tagName: 'span',
  sort: null,
  classNames: ['ember-tabella__header-sort-indicator'],
  classNameBindings: ['sortClass'],

  sortClass: computed('sort', function() {
    let sort = this.get('sort');

    if (sort) {
      return `ember-tabella__header-sort-indicator--${sort}`;
    }
  }),

  content: computed('sort', function() {
    let sort = this.get('sort');
    
    switch(sort) {
      case 'desc':
        return '↓';
      case 'asc':
        return '↑';
      default:
        return '↕';
    }
  })

});
