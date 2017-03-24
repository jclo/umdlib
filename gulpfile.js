/* eslint-env node */
/* eslint one-var: 0 */
/* eslint strict: 0 */

'use strict';

// -- Node modules
var del       = require('del')
  , gulp      = require('gulp')
  , header    = require('gulp-header')
  , concat    = require('gulp-concat')
  , replace   = require('gulp-replace')
  , uglify    = require('gulp-uglify')
  ;

// -- Local declarations
var name     = require('./package.json').name
  , release  = require('./package.json').version
  ;

// -- Global variables
var dist       = './lib'
  , watch      = 'src/**/*.js'
  ;

// -- Text for replacing the tags ({{lib:xxx}}) in the code:
var lib = {
  name: 'UMDLib',
  title: 'UMDLib',
  description: 'UMDLib is ...',
  version: release,
  author: 'John Doe',
  copyright: {
    year: '2017',
    author: '<john@doe.com> (http://www.doe.com/)'
  }
};

// List of JS files to concatenate:
var libjs = [
  './src/_header',
  './src/core.js',
  './src/_footer'
];

// License Header to add to the library:
var license = ['/** ****************************************************************************',
  ' * {{lib:title}}',
  ' *',
  ' * {{lib:description}}',
  ' *',
  ' * @exports  {{lib:name}}',
  ' * @author   {{lib:author}}',
  ' * @version {{lib:version}}',
  ' * @license',
  ' * Copyright (c) {{lib:copyright:year}} {{lib:copyright:author}}.',
  ' * Released under the MIT license. You may obtain a copy of the License',
  ' * at: http://www.opensource.org/licenses/mit-license.php).',
  ' * ****************************************************************************/',
  ''].join('\n');

// -- Gulp Tasks

// Remove the previous '_dist':
gulp.task('remove', function() {
  del.sync([dist]);
});

// Create 'dist' and populate it:
gulp.task('create', ['remove'], function() {
  return gulp.src([
  ]).pipe(gulp.dest(dist));
});

// Merge all JS in one:
gulp.task('doJS', ['create'], function() {
  return gulp.src(libjs)
    .pipe(concat(name.toLowerCase() + '.js'))
    .pipe(header(license))
    .pipe(replace('{{lib:name}}', lib.name))
    .pipe(replace('{{lib:title}}', lib.title))
    .pipe(replace('{{lib:description}}', lib.description))
    .pipe(replace('{{lib:version}}', lib.version))
    .pipe(replace('{{lib:author}}', lib.author))
    .pipe(replace('{{lib:copyright:year}}', lib.copyright.year))
    .pipe(replace('{{lib:copyright:author}}', lib.copyright.author))
    .pipe(gulp.dest(dist));
});

// Minify:
gulp.task('minify', ['doJS'], function() {
  return gulp.src(dist + '/' + name.toLowerCase() + '.js')
    .pipe(uglify({ preserveComments: 'license' }))
    .pipe(concat(name.toLowerCase() + '-min.js'))
    .pipe(gulp.dest(dist));
});

// Rebuild if a file is modified:
gulp.task('watch', function() {
  gulp.watch(watch, ['minify']);
});

// -- Gulp Build (called when you run `gulp` from cli)
gulp.task('default', ['minify']);
