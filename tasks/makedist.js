/* eslint one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0,
  semi-style: 0 */

'use strict';

// -- Node modules
const del         = require('del')
    , gulp        = require('gulp')
    , concat      = require('gulp-concat')
    , header      = require('gulp-header')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    , uglify      = require('gulp-uglify')
    ;

// -- Local modules
const config = require('./config')
    ;

// -- Release version:
const release = require('../package.json').version
    ;

// -- Local constants
const { dist }     = config
    , { libdir }   = config
    , { libname }  = config
    , { noparent } = config
    , name         = libname.replace(/\s+/g, '').toLowerCase()
    , { license }  = config
    ;

// -- Local variables


// -- Gulp Tasks

// Remove previous dist:
gulp.task('deldist', function() {
  return del.sync(dist);
});

// Copy README and LICENSE:
gulp.task('skeleton', function() {
  return gulp.src(['README.md', 'LICENSE.md'])
    .pipe(gulp.dest(dist));
});

// Copy the development version:
gulp.task('copydev', function() {
  return gulp.src(`${libdir}/${name}.js`)
    .pipe(header(license))
    .pipe(replace('{{lib:name}}', `${libname}`))
    .pipe(replace('{{lib:version}}', release))
    .pipe(gulp.dest(dist));
});

// Copy the development version without parent:
gulp.task('makenoparentlib', function() {
  return gulp.src(`${libdir}/${name}${noparent}.js`)
    .pipe(header(license))
    .pipe(replace('{{lib:name}}', `${libname}`))
    .pipe(replace('{{lib:version}}', release))
    .pipe(replace(/ {2}'use strict';\n\n/g, ''))
    .pipe(gulp.dest(dist));
});

// Create the minified version:
gulp.task('makeminified', function() {
  return gulp.src(`${libdir}/${name}.js`)
    .pipe(uglify())
    .pipe(header(license))
    .pipe(replace('{{lib:name}}', `${libname}`))
    .pipe(replace('{{lib:version}}', release))
    .pipe(concat(`${name}.min.js`))
    .pipe(gulp.dest(dist));
});

// -- Gulp Main Task:
gulp.task('makedist', function(callback) {
  runSequence(
    'deldist',
    ['skeleton', 'copydev', 'makenoparentlib', 'makeminified'],
    callback,
  );
});
