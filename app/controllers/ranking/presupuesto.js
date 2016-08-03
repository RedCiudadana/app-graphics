import Ember from 'ember';
import BaseRankingController from './base-ranking';

const computed = Ember.computed;

export default BaseRankingController.extend({
  _sortingDefinition: ['presupuestoActualMA:desc'],

  columnsDefinition: computed(function() {
    return [
      {label: '#', valuePath: 'index', sortable: false, width: '30px'},
      {
        label: 'Municipalidad',
        valuePath: 'nombreMunicipio',
        cellType: 'municipalidad-link'
      },
      {label: 'Departamento', valuePath: 'departamento'},
      {label: 'Alcalde', valuePath: 'nombreAlcalde'},
      {
        label: 'Presupuesto',
        valuePath: 'presupuestoActualMAString',
        sortingProperty: 'presupuestoActualMA',
        cellClassNames: 'amount',
        classNames: 'align-center'
      }
    ];
  })
});
