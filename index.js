/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-js-mock',

  included: function (app) {
    if (app.tests) {
      app.import('bower_components/js-mock/dist/js-mock.js', {
        type: 'test'
      });
    }
  }
};
