import Ember from 'ember';
import formatMoney from 'accounting/format-money';

let colors = [
  '#047d99',
  '#a7d270',
  '#1b95e0',
  '#fc8e0b',
  '#dd1d58',
  '#bcbec0',
  '#1ddddd',
  '#ffbc00'
];

export default Ember.Component.extend({
  municipalidad: null,

  chartOptions: {
    chart: {
      type: 'treemap'
    },
    title: {
      text: 'Distribución de presupuesto',
      style: {
        color: '#0b2f47'
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.point.name + '</b>: ' + formatMoney(this.point.value, 'Q');
      }
    },
    plotOptions: {
      treemap: {
        dataLabels: {
          style: {
            textShadow: null
          }
        }
      }
    }
  },

  chartData: Ember.computed('municipalidad', function() {
    let municipalidad = this.get('municipalidad');

    // Info de los rubros
    let data = municipalidad
      .get('informacionRubrosPresupuestoActual')
      .filterBy('montoAsignado')
      .map(function(e) {
        return {
          name: e.nombre,
          value: e.montoAsignado,
          color: e.color
        };
      });

    return [{data: data}];
  })
});
