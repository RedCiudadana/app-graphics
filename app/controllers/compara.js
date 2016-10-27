import Ember from 'ember';

export default Ember.Controller.extend({
  municipalidades: null,
  municipalidadLeft: null,
  municipalidadRight: null,

  actions: {
    selectMunicipalidadLeft(municipalidad) {
      this.set('municipalidadLeft', municipalidad);
    },

    selectMunicipalidadRight(municipalidad) {
      this.set('municipalidadRight', municipalidad);
    }
  }
});
