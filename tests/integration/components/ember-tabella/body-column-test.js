import EmberObject from '@ember/object';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Column from 'ember-tabella/models/column';

module('Integration | Component | ember tabella/body column', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(2);
    let column = Column.create({
      width: 100,
      contentPath: 'name',
    });

    let model = EmberObject.create({
      name: 'my name',
    });

    this.set('column', column);
    this.set('model', model);

    await render(
      hbs`<EmberTabella::BodyColumn @column={{this.column}} @width={{this.column.width}} @model={{this.model}} />`
    );

    assert.dom('*').hasText('my name', 'content based on contentPath');
    assert.dom('.ember-tabella__body-column').hasStyle({ width: '100px' });
  });
});
