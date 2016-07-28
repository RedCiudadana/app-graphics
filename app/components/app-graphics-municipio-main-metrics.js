import Ember from 'ember';

export default Ember.Component.extend({
  municipio: null,

  porcentajeEjecucion: Ember.computed(
    'municipio.gastoTotal',
    'municipio.presupuestoActual',
    function() {
      return this.get('municipio.gastoTotal')
          / this.get('municipio.presupuestoActual')
          * 100;
    }
  )
});
