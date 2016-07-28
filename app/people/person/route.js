import Ember from 'ember';
import equalIgnoreCase from 'kottans/utils/equal-ignore-case';

export default Ember.Route.extend({
  model (params) {
    const kottan = window.DATA.filter(person => {
      return equalIgnoreCase(person.name, params.person_name);
    })[0];

    return Promise.all(kottan.pokemonIds.map(id => {
      return window.$.getJSON('https://pokeapi.co/api/v1/pokemon/' + id);
    })).then(pokemons => {
      return { kottan, pokemons: pokemons.map(p => Ember.Object.create(p)) };
    });
  },

  actions: {
    like (pokemon) {
      pokemon.set('liked', true);
      return true;
      // console.log('liked', pokemon);
    }
  }
});
