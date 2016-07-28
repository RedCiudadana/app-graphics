import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const municipalidad = Ember.A(this.modelFor('application'))
      .findBy('municipio', params.municipalidad);

    return municipalidad;
  }
});
