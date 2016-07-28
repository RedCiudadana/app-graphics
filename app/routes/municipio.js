import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params.municipalidad)

    const municipalidad = Ember.A(this.modelFor('application'))
      .findBy('municipio', params.municipalidad);

    return municipalidad;
  }
});
