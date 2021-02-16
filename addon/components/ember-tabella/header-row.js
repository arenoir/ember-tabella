import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

export default class EmberTabellaHeaderRow extends Component {
  get style() {
    let width = this.args.width;
    let height = this.args.height;

    return htmlSafe(`width:${width}px;height:${height}px;`);
  }
}
