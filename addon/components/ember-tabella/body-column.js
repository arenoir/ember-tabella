import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../../templates/components/ember-tabella/body-column';
import columnStyle from '../../utils/column-style';

export default Component.extend({
  layout: layout,
  classNames: 'ember-tabella__body-column',
  classNameBindings: ['column.textAlign', 'column.isFixed:ember-tabella__body-column--fixed'],
  attributeBindings: 'style',
  scrollLeft: 0,
  scrollTop: 0,
  model: null,

  style: computed('column.{width,isFixed}', 'scrollLeft', function() {
    const width = get(this, 'column.width');
    const isFixed = get(this, 'column.isFixed');
    const scrollLeft = this.scrollLeft;

    return columnStyle(width, isFixed, scrollLeft);
  }),

  onCellClick() {},

  content: computed('model', 'column', function() {
    const model = this.model;
    const column = this.column;

    if (!model || !column) {
      return;
    }

    return column.getContent(model);
  }),

  click() {
    const column = this.column;
    const model = this.model;

    this.onCellClick(column, model);
  }
});
