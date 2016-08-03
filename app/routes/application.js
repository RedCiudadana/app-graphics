import Ember from 'ember';

export default Ember.Route.extend({
  tabletop: Ember.inject.service('tabletop'),
  model() {
    return this.get('tabletop').fetch('municipalidad-data').then((data) => {
      return Ember.A(data).map(function (e) {
        Ember.setProperties(e, {
          poblacion: parseInt(e.poblacion),
          presupuestoActualMA: parseInt(e.presupuestoActualMA)
        });

        return e;
      });
    });
  }
});
