import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  test('it renders the table', async function (assert) {
    await visit('/');

    assert.dom('.ember-tabella__header-column').exists({ count: 5 });
    assert.dom('.ember-tabella__body-column').exists();
  });

  test('clicking a sortable header updates the sort query params', async function (assert) {
    await visit('/');
    await click(
      '.ember-tabella__header-column--sortable .ember-tabella__header-column__title'
    );

    assert.ok(currentURL().includes('_sort=date'), currentURL());
  });
});
