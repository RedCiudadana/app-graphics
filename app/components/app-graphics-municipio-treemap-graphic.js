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
    }
  },

  chartData: Ember.computed('munipcio', function() {
    let municipalidad = this.get('municipalidad');

    // Info de los rubros
    return [{
      data: [
        {
          name: 'Servicios públicos generales',
          value: parseInt(municipalidad['MArubro1']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Orden púlico y seguridad ciudadana',
          value: parseInt(municipalidad['MArubro2']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Atención a desastres y gestión de riesgos',
          value: parseInt(municipalidad['MArubro3']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Asuntos económicos',
          value: parseInt(municipalidad['MArubro4']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Protección ambiental',
          value: parseInt(municipalidad['MArubro5']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Urbanización y servicios comunitarios',
          value: parseInt(municipalidad['MArubro6']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Salud',
          value: parseInt(municipalidad['MArubro7']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Actividades deportivas y recreativas',
          value: parseInt(municipalidad['MArubro8']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Educación',
          value: parseInt(municipalidad['MArubro9']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Protección social',
          value: parseInt(municipalidad['MArubro10']),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        {
          name: 'Transacciones de la deuda pública',
          value: parseInt(municipalidad['MArubro11']),
          color: colors[Math.floor(Math.random() * colors.length)]
        }
      ]
    }];
  })
});
