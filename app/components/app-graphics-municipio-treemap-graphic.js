import Ember from 'ember';
import formatMoney from 'accounting/format-money';

export default Ember.Component.extend({
  chartOptions: {
    chart: {
      type: 'treemap'
    },
    title: {
      text: null
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.point.name + '</b>: ' + formatMoney(this.point.value, 'Q');
      }
    }
  },

  chartData: Ember.computed('munipcio', function() {
    let municipio = this.get('municipio');

    // Info de los rubros
    return [{
      data: [
        {name: 'Servicios públicos generales', value: parseInt(municipio['MArubro1'])},
        {name: 'Orden púlico y seguridad ciudadana', value: parseInt(municipio['MArubro2'])},
        {name: 'Atención a desastres y gestión de riesgos', value: parseInt(municipio['MArubro3'])},
        {name: 'Asuntos económicos', value: parseInt(municipio['MArubro4'])},
        {name: 'Protección ambiental', value: parseInt(municipio['MArubro5'])},
        {name: 'Urbanización y servicios comunitarios', value: parseInt(municipio['MArubro6'])},
        {name: 'Salud', value: parseInt(municipio['MArubro7'])},
        {name: 'Actividades deportivas y recreativas', value: parseInt(municipio['MArubro8'])},
        {name: 'Educación', value: parseInt(municipio['MArubro9'])},
        {name: 'Protección social', value: parseInt(municipio['MArubro10'])},
        {name: 'Transacciones de la deuda pública', value: parseInt(municipio['MArubro11'])}
      ]
    }];
  })
});
