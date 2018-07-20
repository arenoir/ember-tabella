import Component from '@ember/component';
import layout from '../../templates/components/ember-tabella/body-row';

export default Component.extend({
  layout: layout,
  model: null,
  classNames: 'ember-tabella__body-row',
  onCellClick() {}
});
