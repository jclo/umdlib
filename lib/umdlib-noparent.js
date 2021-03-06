// Based on UMD Lib template v{{template:version}}
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
/* eslint-disable one-var, semi-style */
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
    /* eslint-disable-next-line no-param-reassign */
    root.UMDLib = factory(root);
  }
}({{lib:parent}}, function(root) {
  'use strict';

  var UMDLib
    , previousUMDLib
    , obj = {} // required for 'functional' pattern,
    , extend // required for 'basicplus' and 'functional-shared' patterns,
    , methods // required for 'functionnal-shared' and 'prototypal' patterns,
    ;

  /** **************************************************************************
   *
   * A ...
   *
   * functional-shared.js is built upon the Functional Shared Instantiation
   * pattern. It returns an object by calling its constructor. It doesn't use
   * the new keyword.
   *
   * This pattern allows the objects to share the same methods. It saves space
   * in memory compared to the Functional Instantiation Pattern. So, it should
   * be preferred to this last one.
   *
   * Private Functions:
   *  . extend               adds new properties to an object,
   *
   * Public Methods:
   *  . getString            returns a string,
   *  . getArray             returns an array,
   *
   *
   * @namespace    UMDLib
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */


  // -- Private Functions ------------------------------------------------------

  /**
   * Extends object with new methods.
   *
   * Nota: this function mutates object.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}    the object to extend,
   * @param {Object}    an object containing a set of methods,
   * @returns {}        -,
   * @since 0.0.0
   */
  /* eslint-disable no-param-reassign */
  extend = function(object, meth) {
    var keys = Object.keys(meth)
      , i
      ;

    for (i = 0; i < keys.length; i++) {
      object[keys[i]] = meth[keys[i]];
    }
  }; /* eslint-enable no-param-reassign */


  // -- Public -----------------------------------------------------------------

  /**
   * Returns the object UMDLib.
   * (Functional Shared Instantiation Pattern)
   *
   * @constructor ()
   * @public
   * @param {String}    the argument to be saved as an object variable,
   * @returns {Object}  returns the UMDLib object,
   * @since 0.0.0
   */
  UMDLib = function(name) {
    var obj = {};
    obj.name = name;
    extend(obj, methods);
    return obj;
  };

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousUMDLib = root.UMDLib;

  // Runs UMDLib in noConflict mode, returning the UMDLib variable to its
  // previous owner. Returns a reference to this UMDLib object.
  /* istanbul ignore next */
  /* eslint-disable no-param-reassign */
  UMDLib.noConflict = function() {
    root.UMDLib = previousUMDLib;
    return this;
  };
  /* eslint-enable no-param-reassign */

  // Current version of the library:
  UMDLib.VERSION = '{{lib:version}}';


  // -- Public Methods ---------------------------------------------------------

  methods = {

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
    },

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
      return [1, 2, 3];
    }
  };
  /* eslint-enable one-var, semi-style */


  // Returns the library name:
  return UMDLib;
}));
/* eslint-enable one-var, semi-style */
