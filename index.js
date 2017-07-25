/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-js-mock',

  included: function (app) {
    if (app.tests) {
      app.import(this.project.nodeModulesPath + '/js-mock/dist/js-mock.js', {
        type: 'test'
      });
    }
  }
};
