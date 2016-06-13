# Ember JsMock

[![Build Status](https://travis-ci.org/j-fischer/ember-js-mock.svg?branch=master)](https://travis-ci.org/j-fischer/ember-js-mock)

Ember addon to make [JsMock](http://jsmock.org/) available as an import in your tests. JsMock is a simple mocking test framework, which can be used with any test framework. It is inspired by [jMock](http://www.jmock.org/) and [Sinon.js](http://sinonjs.org/) with its interface being very similar to Sinon in order to make it easy to switch between those two frameworks.

`ember-js-mock` was inspired by [ember-sinon](https://github.com/csantero/ember-sinon).

## Installation

Install JsMock in your ember application using the latest Ember CLI:

    $ ember install ember-js-mock

**Note: Installing `ember-js-mock` will also install `ember-jshamcrest` as the latest version of JsMock currently depends on it. This was not by design and may change again in a later major version.**

## Getting Started

In order to use JsMock in your tests, simply import it in your test file.

    import { module, test } from 'qunit';
    import JsMock from 'js-mock';

    // Declare your mock only once, there is no need to copy & paste t
    // his code into every test case.
    var testMock;

    module('Acceptance | js mock', {
      beforeEach: function () {
        JsMock.watch(function () {
          testMock = JsMock.mock("test");
        });
      },
      afterEach: function() {
        // Ensure that all expectations are fulfilled after each test case.
        JsMock.assertWatched();
      }
    });

    test('verify js-mock is available', function(assert) {
      testMock.once();

      testMock();

      // If there is no other assertion needed in the test method
      // then simply use `assertIfSatisfied()`.
      assert.ok(JsMock.assertWatched());
    });

## API Docs

The full API documentation for JsMock can be found [here](http://www.jsmock.org/docs/index.html).

## License

BSD 3-clause, see [License.md](https://github.com/j-fischer/ember-js-mock/blob/master/LICENSE.md)

## Changelog

Due to a number of NPM packaging issues (see https://github.com/npm/npm/issues/5082), the majority of the previous packages have had issues.
Consequently, I am considering version 0.6.1 to be the initial release.

Major release versions will be synchronized between `ember-js-mock` and `js-mock`.

### 1.0.0

- Upgraded js-mock to 1.0.0
- Added ember-jshamcrest as a dependency as it is required by js-mock in v1

### 0.6.1

- Initial release