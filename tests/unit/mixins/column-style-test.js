import Ember from 'ember';
import ColumnStyleMixin from 'ember-tabella/mixins/column-style';
import { module, test } from 'qunit';

module('Unit | Mixin | column style');

test('it works', function(assert) {
  let ColumnStyleObject = Ember.Object.extend(ColumnStyleMixin);
  let subject = ColumnStyleObject.create({width: 100});
  assert.ok(subject);
});

