import Ember from 'ember';

export default Ember.Controller.extend({
  currentMunicipalidad: null,
  actions: {
    selectMunicipalidad(selectedMunicipalidad) {
      this.set('currentMunicipalidad', selectedMunicipalidad);
    }
  }
});
