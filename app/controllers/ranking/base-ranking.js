import Ember from 'ember';
import Table from 'ember-light-table';

const computed = Ember.computed;

export default Ember.Controller.extend({
  table: null,

  sortedRecords: computed.sort('model', '_sortingDefinition'),

  _sortingDefinition: ['nombreMunicipio'],

  tableRecords: computed.map('sortedRecords', function(municipalidad, index) {
    Ember.setProperties(
      municipalidad,
      {
        index: index + 1
      }
    );

    return municipalidad;
  }),

  columnsDefinition: computed(function() {
    return [];
  }),

  init() {
    this._super(...arguments);

    this.set('table', new Table(this.get('columnsDefinition')));
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
