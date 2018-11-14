import { htmlSafe } from '@ember/string';
import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../../templates/components/ember-tabella/body';

export default Component.extend({
  layout: layout,
  classNames: ['ember-tabella__body'],
  attributeBindings: ['style'],

  style: computed('height', function() {
    const height = get(this, 'height');

    return htmlSafe(`height:${height}px;`);
  }),

  onCellClick() {},
  onScroll() {},

  actions: {
    scrollChange(left, top) {
      get(this, 'onScroll')(left, top);
    }
  }
});
