import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    let municipalidad = this.modelFor('application')
      .municipalidades
      .findBy('municipio', model.municipalidad);

    var configRenglonesColores = Ember.Object.create();

    this
      .modelFor('application')
      .configRenglonesColores
      .forEach((configRenglon) => {
        configRenglonesColores.set(
          configRenglon['renglon'],
          configRenglon['color']
        );
      });

    console.log(configRenglonesColores);

    municipalidad.setProperties(configRenglonesColores);

    controller.set('model', municipalidad);
  }
});
