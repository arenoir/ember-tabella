import Ember from 'ember';

const {Mixin, computed} = Ember;
const {htmlSafe} = Ember.String;

export default Mixin.create({

  style: computed('column.width', 'column.isFixed', 'scrollLeft', function() {
    let style = `width:${this.get('column.width')}px;`;

    if (this.get('column.isFixed')) {
      style += `left:${this.get('scrollLeft')}px;`;
    }

    return htmlSafe(style);
  })

});
