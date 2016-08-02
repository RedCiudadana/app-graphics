import Ember from 'ember';
import formatMoney from 'accounting/format-money';

export default Ember.Component.extend({
  municipio: null,

  chartOptions: {
    chart: {
      type: 'line',
      backgroundColor: null
    },
    title: {
      text: 'Presupuesto asignado vs ejecutado'
    },
    xAxis: {
      categories: [
        2010, 2011, 2012, 2013, 2014, 2015
      ],
      text: null
    },
    yAxis: {
      title: null,
      labels: {
        formatter: function() {
          return formatMoney(this.value, 'Q');
        }
      }
    },
    tooltip: {
      pointFormatter: function() {
        return this.series.name + ': ' + formatMoney(this.y, 'Q') + '<br />';
      },
      shared: true
    },
    legend: {
      enabled: false
    }
  },

  chartData: Ember.computed('munipcio', function() {
    let municipio = this.get('municipio');

    return [
      {
        name: 'Presupuestado',
        data: [
          parseInt(municipio['presupuestoMA2010']),
          parseInt(municipio['presupuestoMA2011']),
          parseInt(municipio['presupuestoMA2012']),
          parseInt(municipio['presupuestoMA2013']),
          parseInt(municipio['presupuestoMA2014']),
          parseInt(municipio['presupuestoMA2015'])
        ]
      },
      {
        name: 'Ejecutado',
        data: [
          parseInt(municipio['presupuestoME2010']),
          parseInt(municipio['presupuestoME2011']),
          parseInt(municipio['presupuestoME2012']),
          parseInt(municipio['presupuestoME2013']),
          parseInt(municipio['presupuestoME2014']),
          parseInt(municipio['presupuestoME2015'])
        ]
      }
    ];
  })
});
