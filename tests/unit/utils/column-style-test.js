import columnStyle from 'dummy/utils/column-style';
import { module, test } from 'qunit';

module('Unit | Utility | column-style', function () {
  // Replace this with your real tests.
  test('it reutrns style string with width', function (assert) {
    let result = columnStyle(100, true, 200);
    assert.equal(result, 'width:100px;left:200px;');
  });

  test('it reutrns style string with not fixed width', function (assert) {
    let result = columnStyle(100, false, 200);
    assert.equal(result, 'width:100px;');
  });
});
