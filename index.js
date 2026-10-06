/* jshint node: true */
'use strict';

module.exports = {
  name: require('./package').name,

  // Published to GitHub Packages as @arenoir/ember-tabella; keep the
  // module namespace stable so imports stay `ember-tabella/...`.
  moduleName() {
    return 'ember-tabella';
  },
};
