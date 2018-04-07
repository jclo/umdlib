/* eslint  one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0,
  semi-style: 0 */

'use strict';

// -- Node modules
const del         = require('del')
    , gulp        = require('gulp')
    , concat      = require('gulp-concat')
    , header      = require('gulp-header')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    ;

// -- Local modules
const config = require('./config')
    ;

// -- Local constants
const dest        = config.libdir
    , { version } = require('../package.json')
    , { dist }    = config
    , lib         = config.libname
    , name        = lib.replace(/\s+/g, '').toLowerCase()
    , { license } = config
    , destlib     = `./_${lib}-${version}`
    ;

// -- Local variables


// -- Gulp Tasks

// Remove the previous version:
gulp.task('delemlib', function() {
  return del.sync(destlib);
});

// Copy dist to destlib:
gulp.task('cpdist', function() {
  return gulp.src(`${dist}/**/*`)
    .pipe(gulp.dest(destlib));
});

// Remove js files:
gulp.task('rmjsfiles', function() {
  return del.sync(`${destlib}/*.js`);
});

// Create the full library:
gulp.task('doemlib', function() {
  return gulp.src(`${dest}/${name}-noparent.js`)
    .pipe(concat(`${name}.js`))
    .pipe(header(license))
    .pipe(replace('{{lib:name}}', `${lib}`))
    .pipe(replace('{{lib:version}}', version))
    .pipe(replace(/  'use strict';\n\n/g, ''))
    .pipe(gulp.dest(destlib));
});

// -- Gulp Main Task
gulp.task('makenoparentlib', function(callback) {
  runSequence('delemlib', 'cpdist', 'rmjsfiles', 'doemlib', callback);
});
