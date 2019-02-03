/* eslint one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0,
  semi-style: 0 */

'use strict';

// -- Node modules
const { series } = require('gulp')
    , fs         = require('fs')
    ;


// -- Local modules
const config  = require('./config')
    ;


// -- Release version:


// -- Local constants
const { dist } = config
    ;


// -- Local variables


// -- Gulp Private Tasks

function makeprivatepackage(cb) {
  fs.readFile('./package.json', 'utf8', function(error, data) {
    if (error) { throw error; }
    const obj = JSON.parse(data);
    obj.main = {};
    obj.scripts = {};
    obj.dependencies = {};
    obj.devDependencies = {};
    obj.private = true;

    // Write the updated package.json:
    fs.writeFile(`${dist}/package.json`, JSON.stringify(obj, null, 2), 'utf8', (err) => {
      if (err) {
        throw err;
      }
      cb();
    });
  });
}


// -- Gulp Public Task(s)

module.exports = series(makeprivatepackage);
