import Ember from 'ember';
import layout from '../../templates/components/ember-tabella/body';

const {Component, computed} = Ember;
const {htmlSafe} = Ember.String;

export default Component.extend({
  layout: layout,
  classNames: ['ember-tabella__body'],
  attributeBindings: ['style'],

  style: computed('height', function() {
    const height = this.get('height');

    return htmlSafe(`height:${height}px;`);
  }),

  actions: {
    columnClicked(column, model) {
      this.sendAction('column-clicked', column, model);
    },

    scrollChange(left, top) {
      this.sendAction('scroll-change', left, top);
    }
  }
});