import Ember from 'ember';
import ColumnStyleMixin from 'ember-tabella/mixins/column-style';
import { module, test } from 'qunit';

module('Unit | Mixin | column style');

// Replace this with your real tests.
test('it works', function(assert) {
  var ColumnStyleObject = Ember.Component.extend(ColumnStyleMixin);
  var subject = ColumnStyleObject.create({width: 100});
  assert.ok(subject);
});
