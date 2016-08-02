import Ember from 'ember';

export default Ember.Component.extend({
  municipalidad: null,

  porcentajeEjecucion: Ember.computed(
    'municipalidad.gastoTotal',
    'municipalidad.presupuestoActual',
    function() {
      return this.get('municipalidad.gastoTotal')
          / this.get('municipalidad.presupuestoActual')
          * 100;
    }
  )
});
