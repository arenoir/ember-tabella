import Component from '@ember/component';
import { computed } from '@ember/object';
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

  onCellClick() {},

  content: computed('model', 'column', function() {
    const model = this.get('model');
    const column = this.get('column');

    if (!model || !column) {
      return;
    }

    return column.getContent(model);
  }),

  click() {
    const column = this.get('column');
    const model = this.get('model');

    this.get('onCellClick')(column, model);
  }
});
