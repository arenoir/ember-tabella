import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

export default class EmberTabellaHeaderRow extends Component {
  get style() {
    let width = this.args.width;
    let height = this.args.height;
    let scrollLeft = this.args.scrollLeft || 0;

    return htmlSafe(
      `width:${width}px;height:${height}px;transform:translateX(-${scrollLeft}px);`
    );
  }
}
