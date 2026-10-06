import columnStyle from 'dummy/utils/column-style';
import { module, test } from 'qunit';

module('Unit | Utility | column-style', function () {
  test('it returns style string with width', function (assert) {
    let result = columnStyle(100, 200);
    assert.strictEqual(result.toString(), 'width:100px;left:200px;');
  });

  test('it returns style string with zero left offset', function (assert) {
    let result = columnStyle(100, 0);
    assert.strictEqual(result.toString(), 'width:100px;left:0px;');
  });

  test('it returns style string with not fixed width', function (assert) {
    let result = columnStyle(100);
    assert.strictEqual(result.toString(), 'width:100px;');
  });
});
