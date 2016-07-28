import Ember from 'ember';

export default Ember.Service.extend({
  lazyImage (id) {
    return new Promise((resolve) => {
      window.$.getJSON('https://pokeapi.co/api/v1/sprite/' + id).then(data => {
        resolve('https://pokeapi.co' + data.image);
      });
    });
  }
});
