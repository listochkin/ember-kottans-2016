import Ember from 'ember';

export default Ember.Component.extend({
  loader: Ember.inject.service('pokemon-image-loader'),
  pokemonImage: Ember.computed('pokemon', function () {
    const id = this.get('pokemon').national_id;
    return this.get('loader').lazyImage(id);
  })
});
