import Ember from 'ember';
import Tabletop from 'tabletop';

// Indice Presupuestos Municipal data
var spreadsheet = 'https://docs.google.com/spreadsheets/d/1iywFvwA0VH1AK6M41KbFDXGavO_rfMfwIyFj2Y3MVAM/pubhtml';

export default Ember.Service.extend({
  fetch(worksheet) {
    const promise = new Ember.RSVP.Promise(function(resolve) {
      Tabletop.init({
        key: spreadsheet,
        callback: function(data) {
          resolve(data[worksheet].elements);
        }
      });
    });

    return promise;
  }
});
