import Ember from 'ember';
import EmberCollection from 'ember-collection/components/ember-collection';

const {set} = Ember;

export default EmberCollection.extend({
  actions: {
    scrollChange({scrollLeft, scrollTop}) {
      set(this, '_scrollLeft', scrollLeft);
      set(this, '_scrollTop', scrollTop);
      this.sendAction('onScrollChange', scrollLeft, scrollTop);
      this.rerender();
    },
    clientSizeChange(clientSize) {
      set(this, '_clientSize', clientSize);
      this.rerender();
    }
  }
});
