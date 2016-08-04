import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    consultarMunicipalidad(municipalidad) {
      this.transitionTo('municipio', {
        municipalidad: municipalidad.municipio
      });
    }
  }
});
