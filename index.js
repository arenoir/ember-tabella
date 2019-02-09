/* jshint node: true */
'use strict';

module.exports = {
<<<<<<< HEAD
  name: 'ember-tabella',
  included: function(app) {
    this._super.included(app);
  },
  isDevelopingAddon: function() {
    return true;
  }
=======
  name: require('./package').name
>>>>>>> f520b99... message
};
