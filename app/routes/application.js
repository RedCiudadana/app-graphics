import Ember from 'ember';
import formatMoney from 'accounting/format-money';
import formatNumber from 'accounting/format-number';
import municipalidadModel from '../models/municipalidad';

export default Ember.Route.extend({

  tabletop: Ember.inject.service('tabletop'),

  model() {
    return Ember.RSVP.hash({

      municipalidades: this.get('tabletop').fetch('data-municipalidades').then((data) => {
        return Ember.A(data).map(function (e) {
          let wrappedObject = municipalidadModel.create(e);
          wrappedObject
            .setProperties({
              poblacion: parseInt(e.poblacion),
              presupuestoActualMA: parseInt(e.presupuestoActualMA),

              presupuestoMA2010: parseInt(e.presupuestoMA2010),
              presupuestoMA2011: parseInt(e.presupuestoMA2011),
              presupuestoMA2012: parseInt(e.presupuestoMA2012),
              presupuestoMA2013: parseInt(e.presupuestoMA2013),
              presupuestoMA2014: parseInt(e.presupuestoMA2014),
              presupuestoMA2015: parseInt(e.presupuestoMA2015),
              presupuestoME2010: parseInt(e.presupuestoME2010),
              presupuestoME2011: parseInt(e.presupuestoME2011),
              presupuestoME2012: parseInt(e.presupuestoME2012),
              presupuestoME2013: parseInt(e.presupuestoME2013),
              presupuestoME2014: parseInt(e.presupuestoME2014),
              presupuestoME2015: parseInt(e.presupuestoME2015),
              MArubro1: parseInt(e.MArubro1),
              MArubro2: parseInt(e.MArubro2),
              MArubro3: parseInt(e.MArubro3),
              MArubro4: parseInt(e.MArubro4),
              MArubro5: parseInt(e.MArubro5),
              MArubro6: parseInt(e.MArubro6),
              MArubro7: parseInt(e.MArubro7),
              MArubro8: parseInt(e.MArubro8),
              MArubro9: parseInt(e.MArubro9),
              MArubro10: parseInt(e.MArubro10),
              MArubro11: parseInt(e.MArubro11),
              poblacionString: formatNumber(e.poblacion),
              presupuestoActualMAString: formatMoney(e.presupuestoActualMA, 'Q'),
              rankingRelacionPartidosPoliticos: parseInt(e.rankingRelacionPartidosPoliticos),
              rankingCensoDatosAbiertos: parseInt(e.rankingCensoDatosAbiertos)
            });

          return wrappedObject;
        });
      }),

      configRenglonesColores: this.get('tabletop').fetch('config-renglones-colores').then((data) => {
        return Ember.A(data).map(function (e) {
          return municipalidadModel.create(e);
        });
      })

    });
  }
});
