import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('presupuestos-municipales', 'Integration | Component | presupuestos municipales', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{presupuestos-municipales}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#presupuestos-municipales}}
      template block text
    {{/presupuestos-municipales}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
