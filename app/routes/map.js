import Ember from 'ember';
// import icon from 'ember-leaflet/helpers/icon';

export default Ember.Route.extend({

  tabletop: Ember.inject.service('tabletop-mapas'),

  // TODO: Mover esto a algún lado donde se pueda cargar aún cuando se navega por
  // link
  model() {

    return Ember.RSVP.hash({
      obras: this.get('tabletop').fetch('data').then((data) => {
        return Ember.A(data).map(function (e) {
          Ember.setProperties(e, {
            latitude: parseFloat(e.latitude),
            longitude: parseFloat(e.longitude),
            anio: parseInt(e.anio),

            // TODO: Fix to use icon helper from ember-leaflet
            icon: L.icon({
              iconUrl: '/assets/img/map-icons/' + e.category + '.png',
              iconSize: L.point(44, 58).multiplyBy(0.95)
            })
          });

          return Ember.Object.create(e);
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
      }),

      categoriasIconos: this.get('tabletop').fetch('categorias-iconos'). then((data) => {
        let categoriasIconos = Ember.A(data).map(function(e) {
          let emberObject = Ember.Object.create(e);

          Ember.setProperties(emberObject, {
            iconUrl: '/assets/img/category-icons/' + e.codigoIcono + '.jpg',
            activo: true
          });

          return emberObject;
        });

        categoriasIconos.addObject(Ember.Object.create({
          nombre: 'Todos',
          iconUrl: '/assets/img/category-icons/todos.jpg',
          activo: true,
          codigoIcono: 'todos'
        }));

        return categoriasIconos;
      })
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    if (!Ember.isEmpty(model.obras)) {
      let currentObra = model.obras.objectAt(0);

      controller.set('currentObra', currentObra);
      controller.set('currentLatitude', currentObra.latitude);
      controller.set('currentLongitude', currentObra.longitude);
    }

    model.obras.forEach((obra) => {
      obra.set('categoryObject', model.categoriasIconos.findBy('codigoIcono', obra.category));
    });

    controller.set('departamentosDisponibles', model.departamentos);
  },

  _findCategoryByCodigoIcono(categoryIcon) {
    console.log(categoryIcon);

    let categoryObject = this.get('categoriasIconos').findBy('codigoIcono', categoryIcon);

    console.log(categoryObject);

    return categoryObject;
  }
});
