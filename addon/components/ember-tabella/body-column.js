import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../../templates/components/ember-tabella/body-column';
import columnStyle from '../../mixins/column-style';

export default Component.extend(columnStyle, {
  layout: layout,
  classNames: 'ember-tabella__body-column',
  classNameBindings: ['column.textAlign', 'column.isFixed:ember-tabella__body-column--fixed'],
  attributeBindings: 'style',
  scrollLeft: 0,
  scrollTop: 0,
  model: null,

  onCellClick2() {},

  content: computed('model', 'column', function() {
    const model = get(this, 'model');
    const column = get(this, 'column');

    if (!model || !column) {
      return;
    }

    return column.getContent(model);
  }),

  click() {
    const column = get(this, 'column');
    const model = get(this, 'model');
    console.log(get(this, 'model'));
    get(this, 'onCellClick2')(column, model);
  }
});
