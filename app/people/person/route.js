import Ember from 'ember';
import equalIgnoreCase from 'kottans/utils/equal-ignore-case';

export default Ember.Route.extend({
  model (params) {
    const kottan = window.DATA.filter(person => {
      return equalIgnoreCase(person.name, params.person_name);
    })[0];
    return Promise.resolve(kottan);
  }
});
