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

    let totalPresupuestado = municipalidad['MArubro1']
      + municipalidad['MArubro2']
      + municipalidad['MArubro3']
      + municipalidad['MArubro4']
      + municipalidad['MArubro5']
      + municipalidad['MArubro6']
      + municipalidad['MArubro7']
      + municipalidad['MArubro8']
      + municipalidad['MArubro9']
      + municipalidad['MArubro10']
      + municipalidad['MArubro11'];

    // TODO: Fix
    let data = Ember.A([
      {
        name: 'Servicios públicos generales',
        value: municipalidad['MArubro1'],
        valueString: formatMoney(municipalidad['MArubro1'], 'Q'),
        porcentaje: municipalidad['MArubro1'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro1'] / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Orden púlico y seguridad ciudadana',
        value: municipalidad['MArubro2'],
        valueString: formatMoney(municipalidad['MArubro2'], 'Q'),
        porcentaje: municipalidad['MArubro2'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro2'] / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Atención a desastres y gestión de riesgos',
        value: municipalidad['MArubro3'],
        valueString: formatMoney(municipalidad['MArubro3'], 'Q'),
        porcentaje: municipalidad['MArubro3'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro3'] / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Asuntos económicos',
        value: municipalidad['MArubro4'],
        valueString: formatMoney(municipalidad['MArubro4'], 'Q'),
        porcentaje: municipalidad['MArubro4'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro4'] / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Protección ambiental',
        value: municipalidad['MArubro5'],
        valueString: formatMoney(municipalidad['MArubro5'], 'Q'),
        porcentaje: municipalidad['MArubro5'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro5'] / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Urbanización y servicios comunitarios',
        value: municipalidad['MArubro6'],
        valueString: formatMoney(municipalidad['MArubro6'], 'Q'),
        porcentaje: municipalidad['MArubro6'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro6'] / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Salud',
        value: municipalidad['MArubro7'],
        valueString: formatMoney(municipalidad['MArubro7'], 'Q'),
        porcentaje: municipalidad['MArubro7'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro7'] / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Actividades deportivas y recreativas',
        value: municipalidad['MArubro8'],
        valueString: formatMoney(municipalidad['MArubro8'], 'Q'),
        porcentaje: municipalidad['MArubro8'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro8'] / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Educación',
        value: municipalidad['MArubro9'],
        valueString: formatMoney(municipalidad['MArubro9'], 'Q'),
        porcentaje: municipalidad['MArubro9'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro9'] / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Protección social',
        value: municipalidad['MArubro10'],
        valueString: formatMoney(municipalidad['MArubro10'], 'Q'),
        porcentaje: municipalidad['MArubro10'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro10'] / totalPresupuestado * 100, 2) + '%'
      },
      {
        name: 'Transacciones de la deuda pública',
        value: municipalidad['MArubro11'],
        valueString: formatMoney(municipalidad['MArubro11'], 'Q'),
        porcentaje: municipalidad['MArubro11'] / totalPresupuestado * 100,
        porcentajeString: formatNumber(municipalidad['MArubro11'] / totalPresupuestado * 100, 2) + '%'
      }
    ]);

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
