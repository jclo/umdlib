/** ****************************************************************************
 * UMDLib
 *
 * UMDLib is ...
 *
 * @exports  UMDLib
 * @author   John Doe
 * @version 0.3.1
 * @license
 * Copyright (c) 2017 <john@doe.com> (http://www.doe.com/).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * ****************************************************************************/
// ESLint declarations
/* global define */
/* eslint-disable max-len, no-param-reassign, one-var-declaration-per-line, no-underscore-dangle */
(function(root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(root);
  } else {
    // Browser globals.
    root.UMDLib = factory(root);
  }
}(this, function(root) {
  'use strict';

  var UMDLib
    , previousUMDLib
    ;

  // Saves the previous value of the PicoDB variable, so that it can be
  // restored later on, if noConflict is used.
  previousUMDLib = root.UMDLib;

  // Initializes Blob function.
  /* istanbul ignore next */
  UMDLib = function() {};

  // Runs UMDLib in noConflict mode, returning the UMDLib variable to its
  // previous owner. Returns a reference to this UMDLib object.
  /* istanbul ignore next */
  UMDLib.noConflict = function() {
    root.UMDLib = previousUMDLib;
    return this;
  };

  /**
   * Defines properties for the UMDLib object.
   *
   * @namespace  UMDLib
   */
  UMDLib = {

    /**
     * Returns an array.
     *
     * @method ()
     * @public
     * @param {}          -,
     * @returns {Array}   returns an array,
     * since 0.0.1
     */
    getArray: function() {
      return ['1', '2', '3'];
    },

    /**
     * Returns a string.
     *
     * @method ()
     * @public
     * @param {}           -,
     * @returns {String}   returns a string,
     * since 0.0.1
     */
    getString: function() {
      return 'I am a string!';
    }
  };

// Current version of the library.
  UMDLib.VERSION = '0.3.1';

  // Returns the library name:
  return UMDLib;
  /* eslint-disable max-len, one-var-declaration-per-line */
}));
