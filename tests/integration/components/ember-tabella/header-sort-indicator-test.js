import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-tabella/header-sort-indicator', 'Integration | Component | ember tabella/header sort indicator', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);


  this.render(hbs`{{ember-tabella/header-sort-indicator}}`);

  assert.equal(this.$().text().trim(), '↕');
});
