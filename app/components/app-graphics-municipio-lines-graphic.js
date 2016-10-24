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
      text: 'Presupuesto asignado vs ejecutado',
      style: {
        color: '#0b2f47'
      }
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
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 467
        },
        chartOptions: {
          yAxis: {
            visible: false
          }
        }
      }]
    }
  },

  chartData: Ember.computed('munipcio', function() {
    let municipio = this.get('municipio');

    return [
      {
        name: 'Presupuestado',
        color: '#fc8e0b',
        data: [
          municipio.get('presupuestoMA2010'),
          municipio.get('presupuestoMA2011'),
          municipio.get('presupuestoMA2012'),
          municipio.get('presupuestoMA2013'),
          municipio.get('presupuestoMA2014'),
          municipio.get('presupuestoMA2015')
        ]
      },
      {
        name: 'Ejecutado',
        color: '#a7d270',
        data: [
          municipio.get('presupuestoME2010'),
          municipio.get('presupuestoME2011'),
          municipio.get('presupuestoME2012'),
          municipio.get('presupuestoME2013'),
          municipio.get('presupuestoME2014'),
          municipio.get('presupuestoME2015')
        ]
      }
    ];
  })
});
