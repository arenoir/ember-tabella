import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/string';
import { A } from '@ember/array';
import { isEmpty } from '@ember/utils';
import { typeOf } from '@ember/utils';

function calculateWidth(columns) {
  if (isEmpty(columns)) {
    return 0;
  }

  return columns.reduce((total, column) => {
    return total + column.width || 0;
  }, 0);
}

export default class EmberTabellaBody extends Component {
  constructor(owner, args) {
    super(owner, args);
    this.markFixedColumns();
    this.rowWidth = calculateWidth(this.columns);
  }

  get numFixedColumns() {
    return this.args.numFixedColumns || 0;
  }

  get height() {
    return this.args.height || 400;
  }

  get style() {
    let height = this.height;

    return htmlSafe(`height:${height}px;`);
  }

  get width() {
    return this.args.width || 500;
  }

  get headerHeight() {
    return this.args.headerHeight || 50;
  }

  get rowHeight() {
    return this.args.rowHeight || 30;
  }

  get hasHeader() {
    return true;
  }

  markFixedColumns() {
    let offset = 0;
    this.fixedColumns.forEach((column) => {
      column.isFixed = true;
      column.offsetLeft = offset;
      column.isFixed = true;
      offset += column.width || 0;
    });
  }

  get columns() {
    let columns = this.args.columns;

    if (isEmpty(columns)) {
      return A([]);
    }

    return A(columns);
  }

  get fixedColumns() {
    let columns = this.columns;
    let length = this.args.numFixedColumns || 0;

    return A(columns.slice(0, length));
  }

  @tracked rowWidth = 0;

  get headerRowWith() {
    return this.rowWidth + 15; //to accommodate scrollbar
  }

  get bodyHeight() {
    return this.height - (this._headerHeight + this._footerHeight);
  }

  get _headerHeight() {
    if (this.hasHeader) {
      return this.headerHeight;
    }

    return 0;
  }

  get _footerHeight() {
    if (this.hasFooter) {
      return this.footerHeight;
    }

    return 0;
  }

  @tracked __scrollLeft__;
  @tracked __scrollTop__;

  get scrollTop() {
    if (typeOf(this.args.scrollTop) === 'number') {
      return this.args.scrollTop;
    }
    return this.__scrollTop__;
  }

  get scrollLeft() {
    if (typeOf(this.args.scrollLeft) === 'number') {
      return this.args.scrollLeft;
    }

    return this.__scrollLeft__;
  }

  @action
  onScroll(left, top) {
    if (this.args.onScroll) {
      this.args.onScroll(left, top);
    } else {
      this.__scrollLeft__ = left;
      this.__scrollTop__ = top;
    }
  }

  @action
  onColumnSort(column, desc) {
    if (this.args.onColumnSort) {
      this.args.onColumnSort(column, desc);
    }
  }

  @action
  onColumnResize(column, offsetX) {
    let mWidth = 80;
    let width = column.width;
    let nWidth = width + (offsetX || 0);

    if (nWidth <= mWidth) {
      nWidth = mWidth;
    }

    column.width = nWidth;
    this.rowWidth = calculateWidth(this.columns);
    this.markFixedColumns();
  }

  setHeaderScrollLeft(element, [scrollLeft]) {
    element.scrollLeft = scrollLeft;
  }
}
