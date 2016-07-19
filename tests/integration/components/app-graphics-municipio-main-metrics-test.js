import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-graphics-municipio-main-metrics', 'Integration | Component | app graphics municipio main metrics', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-graphics-municipio-main-metrics}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#app-graphics-municipio-main-metrics}}
      template block text
    {{/app-graphics-municipio-main-metrics}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
