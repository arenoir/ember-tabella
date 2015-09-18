import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['draggable'],
  classNames: ['ember-tabella__header-resize-handle'],
  _left: 0,
  draggable: true,

  mouseDown: function(event) {
    this.startMouseCapture();
    event.preventDefault();
  },

  startMouseCapture: function() {
    this._resize = this.resize.bind(this);
    this._endMouseCapture = this.endMouseCapture.bind(this);

    document.addEventListener('mousemove', this._resize, false);
    document.addEventListener('mouseup', this._endMouseCapture, false);
    document.addEventListener('mouseleave', this._endMouseCapture, false);
  },

  endMouseCapture: function() {
    document.removeEventListener('mousemove', this._resize, false);
    document.removeEventListener('mouseup', this._endMouseCapture, false);
    document.removeEventListener('mouseleave', this._endMouseCapture, false);
  },

  resize: function(event) {
    //this._offsetLeft = this.element.offsetLeft;
    this._offsetLeft = this.$().offset().left;
    
    var offset = event.pageX - this._offsetLeft;

    if (this._offset === offset) {
      return;
    }

    this._offset = offset;

    this.sendAction('onResize', offset);
  }

});