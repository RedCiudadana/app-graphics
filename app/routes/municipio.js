import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    const municipalidad = Ember.A(this.modelFor('application'))
      .findBy('municipio', model.municipalidad);

    controller.set('model', municipalidad);
  }
});
