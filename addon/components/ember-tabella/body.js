import { htmlSafe } from '@ember/string';
import Component from '@glimmer/component';

export default class EmberTabellaBody extends Component {
  get style() {
    let height = this.args.height;

    return htmlSafe(`height:${height}px;`);
  }
}
