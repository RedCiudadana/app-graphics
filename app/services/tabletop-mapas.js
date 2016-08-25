import Ember from 'ember';
import Tabletop from 'tabletop';

// Indice Presupuestos Municipal data
var spreadsheet = 'https://docs.google.com/spreadsheets/d/1zFpmcoS_WCNDCPQr34K34htSgoufPb2zP1BDAaoa2lw/pubhtml';

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
