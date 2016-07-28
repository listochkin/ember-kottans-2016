import Ember from 'ember';

export default Ember.Component.extend({
  onLike: null,
  actions: {
    like () {
      const result = this.get('onLike')();
    }
  }
});
