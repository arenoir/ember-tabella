import { htmlSafe } from '@ember/string';
import { typeOf } from '@ember/utils';

export default function columnStyle(width, scrollLeft = undefined) {
  let style = `width:${width}px;`;

  if (typeOf(scrollLeft) === 'number') {
    style += `left:${scrollLeft}px;`;
  }

  return htmlSafe(style);
}
