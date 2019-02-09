import { A } from '@ember/array';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Column from 'ember-tabella/models/column';

module('Integration | Component | ember tabella/header-row', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);
    let columns = A([
      Column.create({
        width: 100,
        contentPath: 'name'
      }),
      Column.create({
        width: 100,
        contentPath: 'name'
      })
    ]);

    this.set('columns', columns);

    await render(hbs`{{ember-tabella/header-row
      columns=columns
    }}`);


    assert.dom('.ember-tabella__header-column').exists({ count: 2 }, 'two header columns');
  });
});
