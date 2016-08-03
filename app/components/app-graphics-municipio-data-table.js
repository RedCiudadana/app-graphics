import Ember from 'ember';
import Table from 'ember-light-table';
import formatMoney from 'accounting/format-money';
import formatNumber from 'accounting/format-number';

const computed = Ember.computed;

export default Ember.Component.extend({
  municipalidad: null,

  table: null,

  columns: computed(function() {
    return [
      {label: 'Rubro', valuePath: 'name'},
      {label: 'Monto', valuePath: 'value', cellClassNames: 'amount', classNames: 'align-center'},
      {label: '% del total', valuePath: 'porcentaje', cellClassNames: 'amount', classNames: 'align-center'}
    ];
  }),

  rows: null,

  sortedRows: computed.sort('rows', '_sortingDefinition'),

  _sortingDefinition: ['name'],

  init() {
    this._super(...arguments);

    let municipalidad = this.get('municipalidad');

    let totalPresupuestado = parseInt(municipalidad['MArubro1'])
      + parseInt(municipalidad['MArubro2'])
      + parseInt(municipalidad['MArubro3'])
      + parseInt(municipalidad['MArubro4'])
      + parseInt(municipalidad['MArubro5'])
      + parseInt(municipalidad['MArubro6'])
      + parseInt(municipalidad['MArubro7'])
      + parseInt(municipalidad['MArubro8'])
      + parseInt(municipalidad['MArubro9'])
      + parseInt(municipalidad['MArubro10'])
      + parseInt(municipalidad['MArubro11']);

    let data = Ember.A([
      {
        name: 'Servicios públicos generales',
        value: formatMoney(parseInt(municipalidad['MArubro1']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro1']) / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Orden púlico y seguridad ciudadana',
        value: formatMoney(parseInt(municipalidad['MArubro2']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro2']) / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Atención a desastres y gestión de riesgos',
        value: formatMoney(parseInt(municipalidad['MArubro3']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro3']) / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Asuntos económicos',
        value: formatMoney(parseInt(municipalidad['MArubro4']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro4']) / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Protección ambiental',
        value: formatMoney(parseInt(municipalidad['MArubro5']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro5']) / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Urbanización y servicios comunitarios',
        value: formatMoney(parseInt(municipalidad['MArubro6']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro6']) / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Salud',
        value: formatMoney(parseInt(municipalidad['MArubro7']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro7']) / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Actividades deportivas y recreativas',
        value: formatMoney(parseInt(municipalidad['MArubro8']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro8']) / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Educación',
        value: formatMoney(parseInt(municipalidad['MArubro9']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro9']) / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Protección social',
        value: formatMoney(parseInt(municipalidad['MArubro10']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro10']) / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Transacciones de la deuda pública',
        value: formatMoney(parseInt(municipalidad['MArubro11']), 'Q'),
        porcentaje: formatNumber(parseInt(municipalidad['MArubro11']) / totalPresupuestado * 100, 2) + '%'
      }
    ]);

    this.set('rows', data);

    this.set('table', new Table(
      this.get('columns'),
      this.get('sortedRows')
    ));
  },

  actions: {
    onColumnClick(column) {

      if (!column.sorted) {
        return;
      }

      let sortingDefinition = column.get('valuePath')
        + ':'
        + (column.ascending ? 'asc' : 'desc');

      this.set('_sortingDefinition', [sortingDefinition]);

      this.get('table').setRows([]);

      this.get('table').addRows(this.get('sortedRows'));
    }
  }
});
