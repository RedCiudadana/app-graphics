import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('map', { path: '/map' });
  this.route('municipio', { path: '/municipalidad/:municipalidad' });
  this.route('ranking', function() {
    this.route('presupuesto');
    this.route('poblacion');
    this.route('partidos-politicos');
    this.route('censo-datos-abiertos');
  });
});

export default Router;
