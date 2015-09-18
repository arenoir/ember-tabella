import Ember from 'ember';
import layout from '../../templates/components/ember-tabella/header-row';

const {Component, computed} = Ember;
const {htmlSafe} = Ember.String;

export default Component.extend({
  layout: layout,
  columns: [],
  width: 0,
  height: 0,
  classNames: ['ember-tabella__header-row'],
  attributeBindings: ['style'],
  
  style: computed('width', 'height', function() {
    let width = this.get('width');
    let height = this.get('height');

    return htmlSafe(`width:${width}px;height:${height}px;`);
  })
});