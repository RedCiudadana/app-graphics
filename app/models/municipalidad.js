import Ember from 'ember';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Ember.Object.extend({
  informacionRubrosPresupuestoActual: Ember.computed(
    'MArubro1',
    'MArubro2',
    'MArubro3',
    'MArubro4',
    'MArubro5',
    'MArubro6',
    'MArubro7',
    'MArubro8',
    'MArubro9',
    'MArubro10',
    'MArubro11',
    'MArubro12',
    'NRubro1',
    'NRubro2',
    'NRubro3',
    'NRubro4',
    'NRubro5',
    'NRubro6',
    'NRubro7',
    'NRubro8',
    'NRubro9',
    'NRubro10',
    'NRubro11',
    'NRubro12',
    'MErubro1',
    'MErubro2',
    'MErubro3',
    'MErubro4',
    'MErubro5',
    'MErubro6',
    'MErubro7',
    'MErubro8',
    'MErubro9',
    'MErubro10',
    'MErubro11',
    'MErubro12',
    function() {
      let rubros = Ember.A();

      for (var index = 1; index <= 12; index += 1) {
        if (!this.get('MArubro' + index)) {
          continue;
        }

        rubros.pushObject({
          nombre: this.get('NRubro' + index),
          color: this.get('CRubro' + index),
          montoAsignado: this.get('MArubro' + index),
          montoEjecutado: this.get('MErubro' + index)
        });
      }

      return rubros;
    }
  ),

  sumatoriaPresupuestoActualAsignado: Ember.computed(
    'informacionRubrosPresupuestoActual',
    function() {
      return this.get('informacionRubrosPresupuestoActual')
        .reduce(
          function(accumulated, current) {
            return accumulated + current.montoAsignado;
          },
          0
        );
    }
  )
});
