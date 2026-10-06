import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | ember tabella/header sort indicator',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      assert.expect(1);

      await render(hbs`<EmberTabella::HeaderSortIndicator />`);

      assert.dom('*').hasText('↕');
    });
  }
);
