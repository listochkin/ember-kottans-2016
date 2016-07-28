import Ember from 'ember';

export default Ember.Component.extend({
  pokemonImage: Ember.computed('pokemon', function () {
    const id = this.get('pokemon').national_id;
    return new Promise((resolve, reject) => {
      $.getJSON('https://pokeapi.co/api/v1/sprite/' + id).then(data => {
        resolve('https://pokeapi.co' + data.image);
      });
    });
  })
});
