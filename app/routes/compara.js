import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    let municipalidades = this.modelFor('application').municipalidades;

    controller.set('municipalidades', municipalidades);

    console.log(municipalidades);

    if (municipalidades.length >= 2) {
      controller.set('municipalidadLeft', municipalidades.objectAt(0));
      controller.set('municipalidadRight', municipalidades.objectAt(1));
    }
  }
});
