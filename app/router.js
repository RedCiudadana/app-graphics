import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('municipio', { path: '/municipalidad/:municipalidad' });
  this.route('ranking', { path: '/ranking' });
});

export default Router;
