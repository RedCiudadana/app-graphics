import Ember from 'ember';

export default Ember.Component.extend({
  municipio: null,

  chartOptions: {
    chart: {
      type: 'line',
      backgroundColor: null
    },
    title: {
      text: null
    },
    xAxis: {
      categories: [
        2010, 2011, 2012, 2013, 2014, 2015
      ],
      text: null
    },
    yAxis: {
      title: null
    },
    tooltip: {},
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
