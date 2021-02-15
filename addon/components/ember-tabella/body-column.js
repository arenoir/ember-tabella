import Component from '@glimmer/component';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default class EmberTabellaBodyColumn extends Component {
  get style() {
    let style = `width:${this.args.width}px;`;

    let column = this.args.column;

    if (column && column.offsetLeft) {
      style += `left:${column.offsetLeft}px;`;
    }

    return htmlSafe(style);
  }

  get content() {
    let model = this.args.model;
    let column = this.args.column;

    if (!model || !column) {
      return '';
    }

    return column.getContent(model);
  }

  @action
  click() {
    if (this.args.onCellClick) {
      let model = this.args.model;
      let column = this.args.column;

      this.args.onCellClick(column, model);
    }
  }
}
