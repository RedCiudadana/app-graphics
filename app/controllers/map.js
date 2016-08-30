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
  categoriasIconos: Ember.computed.alias('model.categoriasIconos'),
  categoriasIconosActivas: Ember.computed.filterBy('categoriasIconos', 'activo', true),

  departamentosDisponibles: Ember.computed.alias('model.departamentos'),

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

  // Unused
  categoriasDisponibles: Ember.computed('obras', function() {
    let categoriasDisponibles = this.get('obras')
      .uniqBy('category')
      .mapBy('category');

    return categoriasDisponibles;
  }),

  obrasDesplegables: Ember.computed('currentAnio', 'categoriasIconosActivas.[]', function() {
    var obrasDesplegables = this.get('obras');

    if (this.get('currentAnio')) {
      obrasDesplegables = obrasDesplegables.filterBy('anio', this.get('currentAnio'));
    }

    let categoriasIconosActivasStrings = this.get('categoriasIconosActivas')
      .mapBy('codigoIcono');

    obrasDesplegables = obrasDesplegables.filter(function(obra) {
      return categoriasIconosActivasStrings.contains(obra.get('category'));
    });

    return obrasDesplegables;
  }),

  categoryName: Ember.computed('obras.[]', function() {
    console.log('computing');

    return this.get('obras').map((obra) => {
      obra.set('categoryObject', this.findCategoryByCodigoIcono(obra.get('category')));

      return obra;
    });
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
    },

    toggleActiveCategory(category) {

      if ('todos' === category.get('codigoIcono')) {
        console.log('about to remove todas las categorias');
      }

      category.set('activo', !category.get('activo'));

      console.log(this.get('categoriasIconosActivas').length);
    }
  },

  findCategoryByCodigoIcono(categoryIcon) {
    console.log(categoryIcon);

    let categoryObject = this.get('categoriasIconos').findBy('codigoIcono', categoryIcon);

    console.log(categoryObject);

    return categoryObject;
  }
});
