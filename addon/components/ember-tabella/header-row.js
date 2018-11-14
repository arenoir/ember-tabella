import { htmlSafe } from '@ember/string';
import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../../templates/components/ember-tabella/header-row';

export default Component.extend({
  layout: layout,
  columns: null,
  width: 0,
  height: 0,
  scrollLeft: 0,
  scrollTop: 0,
  classNames: ['ember-tabella__header-row'],
  attributeBindings: ['style'],
  sortedColumn: null,
  isSortReversed: false,

  style: computed('width', 'height', function() {
    const width = get(this, 'width');
    const height = get(this, 'height');

    return htmlSafe(`width:${width}px;height:${height}px;`);
  })
});
