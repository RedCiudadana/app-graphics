import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    let municipalidades = this.modelFor('application').municipalidades;
    let municipalidadesAgrupadas = Ember.A();

    for (var i = 0; i < municipalidades.length; i += 1) {
      let subArray = Ember.A([municipalidades.objectAt(i)]);

      if (i + 1 < municipalidades.length) {
        subArray.push(municipalidades.objectAt(i + 1));
      }

      municipalidadesAgrupadas.addObject(subArray);

      i += 1;
    }

    controller.set('municipalidades', municipalidades);
    controller.set('municipalidadesAgrupadas', municipalidadesAgrupadas);
  }
});
