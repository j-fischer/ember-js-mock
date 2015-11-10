# Ember JsMock

Ember addon to make [JsMock](http://jsmock.org/) available as an import in your tests. JsMock is a simple mocking test framework, which can be used with any test framework. It is inspired by [jMock](http://www.jmock.org/) and [Sinon.js](http://sinonjs.org/) with its interface being very similar to Sinon in order to make it easy to switch between those two frameworks.

`ember-js-mock` was inspired by [ember-sinon](https://github.com/csantero/ember-sinon).

## Installation

Install JsMock in your ember application using the latest Ember CLI:

    $ ember install ember-js-mock

## Getting Started

In order to use JsMock in your tests, simply import it in your test file.  

    import { module, test } from 'qunit';
    import JsMock from 'js-mock';

    // Declare your mock only once, there is no need to copy & paste t
    // his code into every test case.
    var testMock;

    JsMock.monitorMocks(function () {
      testMock = JsMock.mock("test");
    });
    
    module('Acceptance | js mock', {
      afterEach: function() {
        // Ensure that all expectations are fulfilled after each test case.
        JsMock.assertIfSatisfied();
      }
    });

    test('verify js-mock is available', function(assert) {  
      testMock.once();

      testMock();

      // If there is no other assertion needed in the test method
      // then simply use `assertIfSatisfied()`.
      assert.ok(JsMock.assertIfSatisfied());
    });

## API Docs

The full API documentation for JsMock can be found [here](http://www.jsmock.org/docs/index.html).

## License

BSD 3-clause, see [License.txt](https://github.com/j-fischer/ember-js-mock/blob/master/LICENSE.md)

## Changelog

### 0.1.0

- Initial release