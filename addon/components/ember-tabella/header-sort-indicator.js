import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ember-tabella/header-sort-indicator';

export default Component.extend({
  layout: layout,
  tagName: 'span',
  sort: null,
  classNames: ['ember-tabella__header-sort-indicator'],
  classNameBindings: ['sortClass'],

  sortClass: computed('sort', function() {
    const sort = this.get('sort');

    if (sort) {
      return `ember-tabella__header-sort-indicator--${sort}`;
    }
  }),

  content: computed('sort', function() {
    const sort = this.get('sort');
    
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
