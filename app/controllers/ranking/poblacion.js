import Ember from 'ember';
import BaseRankingController from './base-ranking';

const computed = Ember.computed;

export default BaseRankingController.extend({
  _sortingDefinition: ['poblacion:desc'],

  columnsDefinition: computed(function() {
    return [
      {label: '#', valuePath: 'index', sortable: false, width: '30px'},
      {label: 'Municipalidad', valuePath: 'nombreMunicipio'},
      {label: 'Departamento', valuePath: 'departamento'},
      {label: 'Alcalde', valuePath: 'nombreAlcalde'},
      {
        label: 'Población',
        valuePath: 'poblacionString',
        sortingProperty: 'poblacion',
        cellClassNames: 'amount',
        classNames: 'align-center'
      }
    ];
  })
});
