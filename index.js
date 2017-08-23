/* eslint-env node */
'use strict';

let path = require('path');
let mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-js-mock',

  treeForVendor: function(tree) {
    let jsMockAssets = path.join(this.project.nodeModulesPath, 'js-mock', 'dist');

    tree = (tree) ? mergeTrees([ tree, jsMockAssets ]) : jsMockAssets;

    return tree;
  },

  included: function (app) {
    if (app.tests) {
      app.import('vendor/js-mock.js', {
        type: 'test'
      });
    }
  }
};
