import Ember from 'ember';
import layout from '../../templates/components/ember-tabella/body-row';

const {Component} = Ember;

export default Component.extend({
  layout: layout,
  row: null,
  classNames: 'ember-tabella__body-row'
});