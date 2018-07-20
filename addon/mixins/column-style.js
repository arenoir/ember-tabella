import { htmlSafe } from '@ember/string';
import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({

  style: computed('column.{width,isFixed}', 'scrollLeft', function() {
    let style = `width:${this.get('column.width')}px;`;

    if (this.get('column.isFixed')) {
      style += `left:${this.get('scrollLeft')}px;`;
    }

    return htmlSafe(style);
  })

});
