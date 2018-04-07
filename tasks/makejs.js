/* eslint  one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0,
  semi-style: 0 */

'use strict';

// -- Node modules
const del         = require('del')
    , gulp        = require('gulp')
    , concat      = require('gulp-concat')
    , footer      = require('gulp-footer')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    ;

// -- Local modules
const config = require('./config')
    ;

// -- Local constants
const dest       = config.libdir
    , { src }    = config
    , lib        = config.libname
    , name       = lib.replace(/\s+/g, '').toLowerCase()
    , { parent } = config
    , head       = src[0]
    , core       = src.slice(1, -1)
    , foot       = src[src.length - 1]
    ;

// -- Local variables


// -- Gulp Tasks

// Remove the previous version:
gulp.task('dellib', function() {
  return del.sync(dest);
});

// Remove the temp file:
gulp.task('delcore', function() {
  return del(`${dest}/core.js`);
});

// Creates the indented content:
gulp.task('docore', function() {
  return gulp.src(core)
    // remove the extra 'use strict':
    .pipe(replace(/\n'use strict';\n/, ''))
    // indent the first line with 2 spaces:
    .pipe(replace(/^/g, '  '))
    // indent each other lines with 2 spaces:
    .pipe(replace(/\n/g, '\n  '))
    // remove the indent added to the blanck lines:
    // (we need to add an extra line otherwise the indent isn't removed
    // from the last line!)
    .pipe(footer('\n'))
    .pipe(replace(/\s\s\n/g, '\n'))
    .pipe(concat('core.js'))
    .pipe(gulp.dest(dest));
});

// Creates the library without 'this':
gulp.task('dolibnoparent', function() {
  return gulp.src([head, `${dest}/core.js`, foot])
    .pipe(replace('{{lib:name}}', lib))
    .pipe(concat(`${name}-noparent.js`))
    .pipe(gulp.dest(dest));
});

// Creates the library:
gulp.task('dolib', function() {
  return gulp.src(`${dest}/${name}-noparent.js`)
    .pipe(replace('{{lib:parent}}', parent))
    .pipe(concat(`${name}.js`))
    .pipe(gulp.dest(dest));
});

// -- Gulp Main Task
gulp.task('makejs', function(callback) {
  runSequence('dellib', 'docore', 'dolibnoparent', 'dolib', 'delcore', callback);
});
