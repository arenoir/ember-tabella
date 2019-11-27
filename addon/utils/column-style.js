import { htmlSafe } from '@ember/string';

export default function columnStyle(width, isFixed, scrollLeft) {
  let style = `width:${width}px;`;

  if (isFixed) {
    style += `left:${scrollLeft}px;`;
  }

  return htmlSafe(style);
}
