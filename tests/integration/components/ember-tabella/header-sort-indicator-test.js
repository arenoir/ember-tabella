import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember tabella/header sort indicator', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);


    await render(hbs`{{ember-tabella/header-sort-indicator}}`);

    assert.dom('*').hasText('↕');
  });
});
