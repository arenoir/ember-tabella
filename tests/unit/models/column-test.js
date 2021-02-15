import { module, test } from 'qunit';
import ColumnDefinition from 'ember-tabella/models/column';

module('Unit | Model | column style', function () {
  test('it exists', function (assert) {
    let model = ColumnDefinition.create({
      id: 'date',
      width: 150,
      textAlign: 'text-align-left',
      headerCellName: 'Date',
      sortProperties: ['date', 'high:desc'],
      contentPath: 'date',
    });

    assert.ok(!!model);
  });
});
