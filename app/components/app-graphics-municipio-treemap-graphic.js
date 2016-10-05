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

    // console.log(data);

    return [{data: data}];

    // return [{
    //   data: [
    //     {
    //       name: 'Servicios públicos generales',
    //       value: municipalidad.get('MArubro1'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     },
    //     {
    //       name: 'Orden púlico y seguridad ciudadana',
    //       value: municipalidad.get('MArubro2'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     },
    //     {
    //       name: 'Atención a desastres y gestión de riesgos',
    //       value: municipalidad.get('MArubro3'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     },
    //     {
    //       name: 'Asuntos económicos',
    //       value: municipalidad.get('MArubro4'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     },
    //     {
    //       name: 'Protección ambiental',
    //       value: municipalidad.get('MArubro5'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     },
    //     {
    //       name: 'Urbanización y servicios comunitarios',
    //       value: municipalidad.get('MArubro6'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     },
    //     {
    //       name: 'Salud',
    //       value: municipalidad.get('MArubro7'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     },
    //     {
    //       name: 'Actividades deportivas y recreativas',
    //       value: municipalidad.get('MArubro8'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     },
    //     {
    //       name: 'Educación',
    //       value: municipalidad.get('MArubro9'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     },
    //     {
    //       name: 'Protección social',
    //       value: municipalidad.get('MArubro10'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     },
    //     {
    //       name: 'Transacciones de la deuda pública',
    //       value: municipalidad.get('MArubro11'),
    //       color: colors[Math.floor(Math.random() * colors.length)]
    //     }
    //   ]
    // }];
  })
});
