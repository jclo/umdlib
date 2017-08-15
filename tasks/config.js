/* eslint */

'use strict';

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname: 'UMDLib',
  parent: 'this',
  // These are the Javascript files required to build the library:
  src: [
    './src/_header',
    './src/core.js',
    './src/_footer',
  ],
  license: ['/** ****************************************************************************',
    ' * {{lib:name}} v{{lib:version}}',
    ' *',
    ' * A tiny modular Javascript ...',
    ' * Copyright (c) 2017 John Doe <john@doe.com> (http://www.doe.com).',
    ' * Released under the MIT license. You may obtain a copy of the License',
    ' * at: http://www.opensource.org/licenses/mit-license.php).',
    ' * ****************************************************************************/',
    ''].join('\n'),
};
