import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const municipio = Ember.A(this.modelFor('application'))
      .findBy('municipio', params.municipio);

    return municipio;
  }
});
