import EmberObject from '@ember/object';
import ColumnStyleMixin from 'ember-tabella/mixins/column-style';
import { module, test } from 'qunit';

module('Unit | Mixin | column style', function() {
  test('it works', function(assert) {
    let ColumnStyleObject = EmberObject.extend(ColumnStyleMixin);
    let subject = ColumnStyleObject.create({width: 100});
    assert.ok(subject);
  });
});

