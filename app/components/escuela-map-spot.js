import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  spotItem: null,
  currentItem: null,
  isCurrent: computed('spotItem', 'currentItem', function() {
    return this.get('spotItem') === this.get('currentItem');
  })
});
