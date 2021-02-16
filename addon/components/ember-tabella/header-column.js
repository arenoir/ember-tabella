import Component from '@glimmer/component';
import { isEqual, isBlank } from '@ember/utils';
import { action } from '@ember/object';
import columnStyle from 'ember-tabella/utils/column-style';

export default class EmberTabellaHeaderColumn extends Component {
  get minWidth() {
    return this.args.column.minWidth || 50;
  }

  get isResizable() {
    return this.args.column.isResizable;
  }

  get isSortable() {
    return !isBlank(this.args.column.sortProperties);
  }

  get isSortReversed() {
    return this.args.isSortReversed && this.isSorted;
  }

  get style() {
    return columnStyle(this.args.width, this.args.column.offsetLeft);
  }

  get isSorted() {
    let scolumn = this.args.sortedColumn;
    let column = this.args.column;

    if (scolumn && column) {
      return isEqual(scolumn, column);
    }

    return false;
  }

  get sortDirection() {
    if (!this.isSorted) {
      return null;
    }
    if (this.isSortReversed) {
      return 'desc';
    }
    return 'asc';
  }

  get sortedClassName() {
    let direction = this.sortDirection;

    if (!direction) {
      return '';
    }

    return `ember-tabella__header-column--sorted-${direction}`;
  }

  @action
  resize(offsetX) {
    this.args.onColumnResize(this.args.column, offsetX);
  }

  @action
  sort() {
    if (!this.isSortable) {
      return;
    }

    let column = this.args.column;
    let asc = this.isSortReversed;

    if (this.args.onColumnSort) {
      this.args.onColumnSort(column, !asc);
    }
  }
}
