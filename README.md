# UMDLib

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->

[![NPM install][npm-install-image]][npm-install-url]

UMDLib is a template for writing micro UMD Javascript libraries that run both in Node.js and the browser.

UMDLib relies on [Mocha](https://mochajs.org) and [Chai](http://chaijs.com) for unitary testing. It relies on [Istanbul](https://gotwarlost.github.io/istanbul/) for code coverage.

UMDLib uses [Travis CI](https://travis-ci.org) for continuous integration and [Coveralls.io](https://coveralls.io) to display test coverage.


## How to test it

`npm run test` executes the tests and computes the test coverage.

`npm run check-coverage` checks if the test coverage matches the requirements. Here 100%.

`npm run display-coverage` opens your browser and reports the test coverage.


## How to use it

On Node.js install UMDLib (npm install umdlib) and create a file that contains:

```
var umdlib = require('umdlib');
...
```

On the browser, pick-up the JS file `lib/umdlib.js` and add it as a script in your HTML file. `umdlib` is an immediately-invoked function expression. It attaches the `UMDLib` variable to the current context.

```
<!DOCTYPE html>
<html>
  <body>
    <script src="umdlib.js"></script>
    <script>
    	console.log(UMDLib.VERSION);
    </script>
  </body>
</html>
```

## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/umdlib.svg?style=flat-square
[npm-install-image]: https://nodei.co/npm/umdlib.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/umdlib.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/umdlib.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/umdlib/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/umdlib/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/umdlib/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/umdlib.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/umdlib
[npm-install-url]: https://nodei.co/npm/umdlib
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/umdlib
[travis-url]: https://travis-ci.org/jclo/umdlib
[coveralls-url]: https://coveralls.io/github/jclo/umdlib?branch=master
[dependencies-url]: https://david-dm.org/jclo/umdlib#info=dependencies
[devdependencies-url]: https://david-dm.org/jclo/umdlib#info=devDependencies
[license-url]: http://opensource.org/licenses/MIT
