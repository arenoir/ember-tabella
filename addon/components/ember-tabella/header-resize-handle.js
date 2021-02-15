import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class EmberTabellaHeaderResizeHandle extends Component {
  @action
  dragStart(event) {
    event.dataTransfer.setDragImage(new Image(), 0, 0);
  }

  @action
  drag(event) {
    this.__offsetLeft__ = event.target.getBoundingClientRect().left;

    if (event.pageX > 0) {
      let offset = event.pageX - this.__offsetLeft__;

      if (this.args.onResize) {
        this.args.onResize(offset);
      }
    }
  }
}

// import Component from '@ember/component';

// export default Component.extend({
//   attributeBindings: ['draggable'],
//   classNames: ['ember-tabella__header-resize-handle'],
//   _left: 0,
//   draggable: true,

//   onResize() {},

//   mouseDown: function(event) {
//     this.startMouseCapture();
//     event.preventDefault();
//   },

//   startMouseCapture: function() {
//     this._resize = this.resize.bind(this);
//     this._endMouseCapture = this.endMouseCapture.bind(this);

//     document.addEventListener('mousemove', this._resize, false);
//     document.addEventListener('mouseup', this._endMouseCapture, false);
//     document.addEventListener('mouseleave', this._endMouseCapture, false);
//   },

//   endMouseCapture: function() {
//     document.removeEventListener('mousemove', this._resize, false);
//     document.removeEventListener('mouseup', this._endMouseCapture, false);
//     document.removeEventListener('mouseleave', this._endMouseCapture, false);
//   },

//   resize: function(event) {
//     this._offsetLeft = this.element.getBoundingClientRect().left;

//     var offset = event.pageX - this._offsetLeft;

//     if (this._offset === offset) {
//       return;
//     }

//     this._offset = offset;

//     this.onResize(offset);
//   }

// });
