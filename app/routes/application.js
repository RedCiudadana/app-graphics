import Ember from 'ember';
import formatMoney from 'accounting/format-money';
import formatNumber from 'accounting/format-number';

export default Ember.Route.extend({
  tabletop: Ember.inject.service('tabletop'),
  model() {
    return this.get('tabletop').fetch('municipalidad-data').then((data) => {
      return Ember.A(data).map(function (e) {
        Ember.setProperties(e, {
          poblacion: parseInt(e.poblacion),
          presupuestoActualMA: parseInt(e.presupuestoActualMA),
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
          presupuestoActualMAString: formatMoney(e.presupuestoActualMA, 'Q')
        });

        return e;
      });
    });
  }
});
