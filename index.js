/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-tabella',
  included: function(app) {
    this._super.included(app);
  },
  isDevelopingAddon: function() {
    return true;
  }
};
