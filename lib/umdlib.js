/* ****************************************************************************
* UMDLib v0.0.1
*
* UMDLib is ...
* Copyright (c) 2015 John Doe <jdo@johndoe.com> (http://www.johndoe.com).
* Released under the MIT license. You may obtain a copy of the License
* at: http://www.opensource.org/licenses/mit-license.php).
* ****************************************************************************/
/* global define */
/* eslint */
(function(root, factory) {
  'use strict';
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals.
    root.UMDLib = factory();
  }
}(this, function() {
  'use strict';

  // Globals variables and constants.
  // (inside the scope of the module)
  var VERSION = '0.0.1';

  /**
   * Defines UMDLib as an empty function object.
   *
   * @namespace  UMDLib
   */
  /* istanbul ignore next */
  var UMDLib = function() {};

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

  // Attach the property VERSION to UMDLib.
  UMDLib.VERSION = VERSION;

  // Return the object UMDLib.
  return UMDLib;

}));
