import Ember from 'ember';
import formatMoney from 'accounting/format-money';

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
      hideDelay: 100,
      useHTML: true,
      formatter() {
        return '<b>' + this.point.name + '</b> <br /> ' + formatMoney(this.point.value, 'Q');
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
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 467
        },
        chartOptions: {
          plotOptions: {
            treemap: {
              dataLabels: {
                enabled: false
              }
            }
          }
          // ,
          // TODO: Pendiente de terminar
          // tooltip: {
          //   formatter() {
          //     return '<b>' + this.point.name + '</b> <br /> ' + formatMoney(this.point.value, 'Q');
          //   }
          // }
        }
      }]
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
