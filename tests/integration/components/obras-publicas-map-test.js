import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('obras-publicas-map', 'Integration | Component | obras publicas map', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{obras-publicas-map}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#obras-publicas-map}}
      template block text
    {{/obras-publicas-map}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
