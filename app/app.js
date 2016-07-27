import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

window.Promise = Ember.RSVP.Promise;

window.DATA = [
  { id: 11, name: 'John', pokemonIds: [1, 2, 3] },
  { id: 12, name: 'Andrey', pokemonIds: [1, 4, 5] },
  { id: 13, name: 'Mikhail Bortnyk', pokemonIds: [] }
];

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
