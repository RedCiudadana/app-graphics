import Ember from 'ember';
import Table from 'ember-light-table';
import formatMoney from 'accounting/format-money';
import formatNumber from 'accounting/format-number';

const computed = Ember.computed;

export default Ember.Controller.extend({
  table: null,

  sortedRecords: computed.sort('model', '_sortingDefinition'),

  _sortingDefinition: ['presupuesto:desc'],

  tableRecords: computed.map('sortedRecords', function(municipalidad, index) {
    Ember.setProperties(
      municipalidad,
      {
        index: index + 1,
        poblacionString: formatNumber(municipalidad.poblacion),
        presupuestoActualMAString: formatMoney(municipalidad.presupuestoActualMA, 'Q')
      }
    );

    return municipalidad;
  }),

  columns: computed(function() {
    return [
      {label: '#', valuePath: 'index', sortable: false, width: '30px'},
      {label: 'Municipalidad', valuePath: 'nombreMunicipio'},
      {label: 'Departamento', valuePath: 'departamento'},
      {label: 'Alcalde', valuePath: 'nombreAlcalde'},
      {
        label: 'Habitantes',
        valuePath: 'poblacionString',
        sortingProperty: 'poblacion',
        cellClassNames: 'amount',
        classNames: 'align-center'
      },
      {
        label: 'Presupuesto',
        valuePath: 'presupuestoActualMAString',
        sortingProperty: 'presupuesto',
        cellClassNames: 'amount',
        classNames: 'align-center'
      }
    ];
  }),

  init() {
    this._super(...arguments);

    this.set('table', new Table(this.get('columns')));
  },

  setTableData() {
    this.get('table').setRows([]);
    this.get('table').addRows(this.get('tableRecords'));
  },

  actions: {
    onColumnClick(column) {

      if (!column.sorted) {
        return;
      }

      let sortingProperty = Ember.isEmpty(column.get('sortingProperty')) ?
        column.get('valuePath') :
        column.get('sortingProperty');

      let sortingDefinition = sortingProperty
        + ':'
        + (column.ascending ? 'asc' : 'desc');

      this.set('_sortingDefinition', [sortingDefinition]);

      this.setTableData();
    }
  }
});
