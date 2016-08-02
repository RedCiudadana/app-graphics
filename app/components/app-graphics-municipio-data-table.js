import Ember from 'ember';
import Table from 'ember-light-table';
import formatMoney from 'accounting/format-money';

const computed = Ember.computed;

export default Ember.Component.extend({
  municipalidad: null,

  table: null,

  columns: computed(function() {
    return [
      {label: 'Rubro', valuePath: 'name'},
      {label: 'Monto', valuePath: 'value'}
    ];
  }),

  rows: null,

  sortedRows: Ember.computed.sort('rows', '_sortingDefinition'),

  _sortingDefinition: ['name'],

  init() {
    this._super(...arguments);

    let municipalidad = this.get('municipalidad');

    let data = Ember.A([
      {
        name: 'Servicios públicos generales',
        value: formatMoney(parseInt(municipalidad['MArubro1']), 'Q')
      },
      {
        name: 'Orden púlico y seguridad ciudadana',
        value: formatMoney(parseInt(municipalidad['MArubro2']), 'Q')
      },
      {
        name: 'Atención a desastres y gestión de riesgos',
        value: formatMoney(parseInt(municipalidad['MArubro3']), 'Q')
      },
      {
        name: 'Asuntos económicos',
        value: formatMoney(parseInt(municipalidad['MArubro4']), 'Q')
      },
      {
        name: 'Protección ambiental',
        value: formatMoney(parseInt(municipalidad['MArubro5']), 'Q')
      },
      {
        name: 'Urbanización y servicios comunitarios',
        value: formatMoney(parseInt(municipalidad['MArubro6']), 'Q')
      },
      {
        name: 'Salud',
        value: formatMoney(parseInt(municipalidad['MArubro7']), 'Q')
      },
      {
        name: 'Actividades deportivas y recreativas',
        value: formatMoney(parseInt(municipalidad['MArubro8']), 'Q')
      },
      {
        name: 'Educación',
        value: formatMoney(parseInt(municipalidad['MArubro9']), 'Q')
      },
      {
        name: 'Protección social',
        value: formatMoney(parseInt(municipalidad['MArubro10']), 'Q')
      },
      {
        name: 'Transacciones de la deuda pública',
        value: formatMoney(parseInt(municipalidad['MArubro11']), 'Q')
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
