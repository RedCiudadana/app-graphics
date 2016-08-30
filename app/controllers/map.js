import Ember from 'ember';

export default Ember.Controller.extend({
  currentLatitude: 14.569668,
  currentLongitude: -90.497174,
  currentZoom: 12,
  currentObra: null,

  currentDepartamento: null,
  currentMunicipio: null,
  currentAnio: null,

  obras: Ember.computed.alias('model.obras'),

  departamentosDisponibles: null,
  municipiosDisponibles: Ember.computed('currentDepartamento', function() {

    if (!this.get('currentDepartamento')) {
      return Ember.A([]);
    }

    return this.model.municipios.filterBy(
      'departamento',
      this.get('currentDepartamento').codigo
    );
  }),
  aniosDisponibles: Ember.computed('obras', function() {
    let aniosDisponibles = this.get('obras')
      .uniqBy('anio')
      .sortBy('anio')
      .mapBy('anio');

    return aniosDisponibles;
  }),

  obrasDesplegables: Ember.computed('currentAnio', function() {
    var obrasDesplegables = this.get('obras');

    if (!this.get('currentAnio')) {
      return obrasDesplegables;
    }

    if (this.get('currentAnio')) {
      obrasDesplegables = obrasDesplegables.filterBy('anio', this.get('currentAnio'));
    }

    return obrasDesplegables;
  }),

  actions: {

    /**
     * Al seleccionar un departamento el mapa se mueve a su ubicación central, además
     * se aplica un filtro sobre los municipios disponibles.
     */
    selectDepartamento(departamento) {
      this.set('currentDepartamento', departamento);

      this.set('currentLatitude', departamento.latitude);
      this.set('currentLongitude', departamento.longitude);

      this.set('currentMunicipio', null);
    },

    selectMunicipio(municipio) {
      this.set('currentMunicipio', municipio);

      this.set('currentLatitude', municipio.latitude);
      this.set('currentLongitude', municipio.longitude);
    },

    selectAnio(anio) {
      this.set('currentAnio', anio);
    }
  }
});
