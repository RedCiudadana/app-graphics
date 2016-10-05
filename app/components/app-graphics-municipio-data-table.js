import Ember from 'ember';
import Table from 'ember-light-table';
import formatMoney from 'accounting/format-money';
import formatNumber from 'accounting/format-number';

const computed = Ember.computed;

export default Ember.Component.extend({
  municipalidad: null,

  table: null,

  columnsDefinition: computed(function() {
    return [
      {label: 'Rubro', valuePath: 'name'},
      {
        label: 'Monto',
        valuePath: 'valueString',
        sortingProperty: 'value',
        cellClassNames: 'amount',
        classNames: 'align-center'
      },
      {
        label: '% del total',
        valuePath: 'porcentajeString',
        sortingProperty: 'porcentaje',
        cellClassNames: 'amount',
        classNames: 'align-center'
      }
    ];
  }),

  rows: null,

  sortedRecords: computed.sort('rows', '_sortingDefinition'),

  _sortingDefinition: ['porcentaje:desc'],

  init() {
    this._super(...arguments);

    let municipalidad = this.get('municipalidad');

    let sumatoriaPresupuestoActualAsignado = municipalidad.get('sumatoriaPresupuestoActualAsignado');

    // Info de los rubros
    let data = municipalidad
      .get('informacionRubrosPresupuestoActual')
      .filterBy('montoAsignado')
      .map(function(e) {
        return {
          name: e.nombre,
          value: e.montoAsignado,
          valueString: formatMoney(e.montoAsignado, 'Q'),
          porcentaje: e.montoAsignado / sumatoriaPresupuestoActualAsignado * 100,
          porcentajeString:
            formatNumber(
              e.montoAsignado / sumatoriaPresupuestoActualAsignado * 100,
              2
            )
              + '%'
        };
      });

    this.set('rows', data);

    this.set('table', new Table(
      this.get('columnsDefinition'),
      this.get('sortedRecords')
    ));
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

      this.get('table').setRows([]);

      this.get('table').addRows(this.get('sortedRecords'));
    }
  }
});
