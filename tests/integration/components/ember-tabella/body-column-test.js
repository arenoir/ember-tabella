import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Column from 'ember-tabella/models/column';

moduleForComponent('ember-tabella/body-column', 'Integration | Component | ember tabella/body column', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  let column = Column.create({
    width: 100,
    contentPath: 'name'
  });

  let model = Ember.Object.create({
    name: 'my name'
  });
  
  this.set('column', column);
  this.set('model', model);

  this.render(hbs`{{ember-tabella/body-column column=column model=model}}`);


  assert.equal(this.$().text().trim(), 'my name', 'content based on contentPath');
});
