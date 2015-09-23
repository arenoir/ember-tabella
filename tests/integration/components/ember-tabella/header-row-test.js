import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Column from 'ember-tabella/models/column';

moduleForComponent('ember-tabella/header-row', 'Integration | Component | ember tabella/header-row', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  let columns = Ember.A([
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

  this.render(hbs`{{ember-tabella/header-row 
    columns=columns 
  }}`);


  assert.equal(this.$('.ember-tabella__header-column').length, 2, 'two header columns');
});