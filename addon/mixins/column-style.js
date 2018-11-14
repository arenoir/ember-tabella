import { htmlSafe } from '@ember/string';
import Mixin from '@ember/object/mixin';
import { get, computed } from '@ember/object';

export default Mixin.create({

  style: computed('column.{width,isFixed}', 'scrollLeft', function() {
    let style = `width:${get(this, 'column.width')}px;`;

    if (get(this, 'column.isFixed')) {
      style += `left:${get(this, 'scrollLeft')}px;`;
    }

    return htmlSafe(style);
  })

});
