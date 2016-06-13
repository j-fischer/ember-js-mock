import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';
import JsMock from 'js-mock';

module('Acceptance | js mock', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('verify js-mock is available', function(assert) {
  var testMock;

  JsMock.watch(function () {
    testMock = JsMock.mock("test");
  });

  testMock.once();

  testMock();

  assert.ok(JsMock.assertWatched());
});
