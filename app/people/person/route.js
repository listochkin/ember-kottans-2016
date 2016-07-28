import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    const kottan = window.DATA.filter(person => {
      return person.name === params.person_name;
    })[0];
    return Promise.resolve(kottan);
  }
});
