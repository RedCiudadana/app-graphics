import Ember from 'ember';
// import icon from 'ember-leaflet/helpers/icon';

export default Ember.Route.extend({

  tabletop: Ember.inject.service('tabletop-mapas'),

  // TODO: Mover esto a algún lado donde se pueda cargar aún cuando se navega por
  // link
  model() {

    return Ember.RSVP.hash({
      escuelas: this.get('tabletop').fetch('data').then((data) => {
        return Ember.A(data).map(function (e) {
          Ember.setProperties(e, {
            latitude: parseFloat(e.latitude),
            longitude: parseFloat(e.longitude),

            // TODO: Fix to use icon helper from ember-leaflet
            icon: L.icon({
              iconUrl: '/assets/img/map-icons/' + e.category + '.png',
              iconSize: L.point(44, 58).multiplyBy(0.95)
            })
          });

          return e;
        });
      }),

      departamentos: this.get('tabletop').fetch('departamentos').then((data) => {
        return Ember.A(data).map(function(e) {
          Ember.setProperties(e, {
            latitude: parseFloat(e.latitude),
            longitude: parseFloat(e.longitude)
          });

          return e;
        });
      }),

      municipios: this.get('tabletop').fetch('municipios').then((data) => {
        return Ember.A(data).map(function(e) {
          Ember.setProperties(e, {
            latitude: parseFloat(e.latitude),
            longitude: parseFloat(e.longitude)
          });

          return e;
        });
      })
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    if (!Ember.isEmpty(model.escuelas)) {
      let currentEscuela = model.escuelas.objectAt(0);

      controller.set('currentEscuela', currentEscuela);
      controller.set('currentLatitude', currentEscuela.latitude);
      controller.set('currentLongitude', currentEscuela.longitude);
    }

    controller.set('departamentosDisponibles', model.departamentos);
  }
});
