import Component from '@glimmer/component';
import { action } from '@ember/object';
import columnStyle from 'ember-tabella/utils/column-style';

export default class EmberTabellaBodyColumn extends Component {
  get style() {
    return columnStyle(this.args.width, this.args.column.offsetLeft);
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
