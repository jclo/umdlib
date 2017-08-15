// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"], one-var: 0 */
/* eslint-disable no-param-reassign */
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

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousUMDLib = root.UMDLib;

  // Initializes the function.
  /* istanbul ignore next */
  UMDLib = function() {};

  // Runs UMDLib in noConflict mode, returning the UMDLib variable to its
  // previous owner. Returns a reference to this UMDLib object.
  /* istanbul ignore next */
  UMDLib.noConflict = function() {
    root.UMDLib = previousUMDLib;
    return this;
  };

  // Current version of the library:
  UMDLib.VERSION = '{{lib:version}}';
  /* eslint-enable no-param-reassign */

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
     * @since 0.0.0
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
     * @since 0.0.0
     */
    getString: function() {
      return 'I am a string!';
    }
  };

  // Returns the library name:
  return UMDLib;
}));
