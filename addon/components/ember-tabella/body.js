import { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';

export default class EmberTabellaBody extends Component {
  get style() {
    let height = this.args.height;

    return htmlSafe(`height:${height}px;`);
  }
}
