/* eslint */

'use strict';

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname: 'UMDLib',
  parent: 'this',
  // These are the Javascript files required to build the library. Choose one
  // pattern among these ones. The library can include only the header file,
  // a core file and the footer file. The files 'basic.js', 'functional.js',
  // 'functional-shared.js', 'prototypal.js', 'pseudoclassical.js' and
  // 'pseudoclassical-auto.js' are mutually exclusives.
  src: [
    './src/_header',
    // './src/basic.js',
    // './src/basicplus.js',
    // './src/functional.js',
    './src/functional-shared.js',
    // './src/prototypal.js',
    // './src/pseudoclassical.js',
    // './src/pseudoclassical-auto.js',
    './src/_footer',
  ],
  license: ['/** ****************************************************************************',
    ' * {{lib:name}} v{{lib:version}}',
    ' *',
    ' * A tiny modular Javascript ...',
    ' * (you can download it from npm or github repositories)',
    ' * Copyright (c) 2018 John Doe <john@doe.com> (http://www.doe.com).',
    ' * Released under the MIT license. You may obtain a copy of the License',
    ' * at: http://www.opensource.org/licenses/mit-license.php).',
    ' * ************************************************************************** */',
    ''].join('\n'),
};
