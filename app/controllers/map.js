import Ember from 'ember';

export default Ember.Controller.extend({
  currentLatitude: 14.569668,
  currentLongitude: -90.497174,
  currentZoom: 12,
  currentEscuela: null,

  actions: {
    pickEscuela(escuela) {
      this.set('currentEscuela', escuela);
      this.set('currentLatitude', escuela.latitude);
      this.set('currentLongitude', escuela.longitude);
    }
  }
});
