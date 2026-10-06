import { htmlSafe } from '@ember/template';
import { typeOf } from '@ember/utils';

export default function columnStyle(width, scrollLeft = undefined) {
  let style = `width:${width}px;`;

  if (typeOf(scrollLeft) === 'number') {
    style += `left:${scrollLeft}px;`;
  }

  return htmlSafe(style);
}
