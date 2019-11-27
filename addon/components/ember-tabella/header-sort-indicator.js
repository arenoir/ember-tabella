import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../../templates/components/ember-tabella/header-sort-indicator';

export default Component.extend({
  layout: layout,
  tagName: 'span',
  sort: null,
  classNames: ['ember-tabella__header-sort-indicator'],
  classNameBindings: ['sortClass'],

  sortClass: computed('sort', function() {
    const sort = get(this, 'sort');

    if (sort) {
      return `ember-tabella__header-sort-indicator--${sort}`;
    } else {
      return '';
    }
  }),

  content: computed('sort', function() {
    const sort = get(this, 'sort');

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
