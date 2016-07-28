import Ember from 'ember';

export default Ember.Component.extend({
  chartOptions: {
    chart: {
      type: 'treemap'
    },
    title: {
      text: null
    }
  },

  // chartData: [{
  //   data: [
  //     {name: 'Apples', value: 3},
  //     {name: 'Bananas', value: 5},
  //     {name: 'Sup', value: 7},
  //     {name: 'Yo', value: 12}
  //   ]
  // }]

  chartData: Ember.computed('munipcio', function() {
    let municipio = this.get('municipio');

    // Info de los rubros
    return [{
      data: [
        parseInt(municipio['presupuestoMA2010']),
        parseInt(municipio['presupuestoMA2011']),
        parseInt(municipio['presupuestoMA2012']),
        parseInt(municipio['presupuestoMA2013']),
        parseInt(municipio['presupuestoMA2014']),
        parseInt(municipio['presupuestoMA2015'])
      ]
    }];
  })
});
