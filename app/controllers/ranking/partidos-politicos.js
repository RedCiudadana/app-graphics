import Ember from 'ember';
import BaseRankingController from './base-ranking';

export default BaseRankingController.extend({
  _sortingDefinition: ['poblacion:desc'],

  columnsDefinition: Ember.computed(function() {
    return [
      {label: '#', valuePath: 'index', sortable: false, width: '30px'},
      {label: 'Municipalidad', valuePath: 'nombreMunicipio'},
      {label: 'Departamento', valuePath: 'departamento'},
      {label: 'Alcalde', valuePath: 'nombreAlcalde'},
      {
        label: 'Puntaje',
        valuePath: 'rankingCensoDatosAbiertos',
        cellClassNames: 'amount',
        classNames: 'align-center'
      }
    ];
  })
});
