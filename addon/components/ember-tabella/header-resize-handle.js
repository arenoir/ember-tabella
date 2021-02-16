import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class EmberTabellaHeaderResizeHandle extends Component {
  @action
  mouseDown(event) {
    this.__element__ = event.target;
    this.startMouseCapture();
    event.preventDefault();
  }

  startMouseCapture() {
    this._resize = this.resize.bind(this);
    this._endMouseCapture = this.endMouseCapture.bind(this);

    document.addEventListener('mousemove', this._resize, false);
    document.addEventListener('mouseup', this._endMouseCapture, false);
    document.addEventListener('mouseleave', this._endMouseCapture, false);
  }

  endMouseCapture() {
    document.removeEventListener('mousemove', this._resize, false);
    document.removeEventListener('mouseup', this._endMouseCapture, false);
    document.removeEventListener('mouseleave', this._endMouseCapture, false);
  }

  resize(event) {
    let offset = event.pageX - this.__element__.getBoundingClientRect().left;

    if (this.args.onResize) {
      this.args.onResize(offset);
    }
  }
}
