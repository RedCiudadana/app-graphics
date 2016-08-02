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
    }
  },

  chartData: Ember.computed('munipcio', function() {
    let municipio = this.get('municipio');

    // Info de los rubros
    return [{
      data: [
        {
          name: 'Servicios públicos generales',
          value: parseInt(municipio['MArubro1']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Orden púlico y seguridad ciudadana',
          value: parseInt(municipio['MArubro2']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Atención a desastres y gestión de riesgos',
          value: parseInt(municipio['MArubro3']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Asuntos económicos',
          value: parseInt(municipio['MArubro4']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Protección ambiental',
          value: parseInt(municipio['MArubro5']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Urbanización y servicios comunitarios',
          value: parseInt(municipio['MArubro6']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Salud',
          value: parseInt(municipio['MArubro7']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Actividades deportivas y recreativas',
          value: parseInt(municipio['MArubro8']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Educación',
          value: parseInt(municipio['MArubro9']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Protección social',
          value: parseInt(municipio['MArubro10']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Transacciones de la deuda pública',
          value: parseInt(municipio['MArubro11']),
          color: colors[Math.floor(Math.random() * colors.length)]
        }
      ]
    }];
  })
});
