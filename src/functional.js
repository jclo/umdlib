/** **************************************************************************
 *
 * A ...
 *
 * functional.js is built upon the Functional Instantiation pattern. It
 * returns an object by calling its constructor. It doesn't use the new
 * keyword.
 *
 * Private Functions:
 *  . ...                  ...,
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
/* - */

'use strict';

/**
 * Returns the object UMDLib.
 * (Functional Instantiation Pattern)
 *
 * @constructor ()
 * @public
 * @param {String}    the argument to be saved as an object variable,
 * @returns {Object}  returns the UMDLib object,
 * @since 0.0.0
 */
UMDLib = function(name) {
  obj.name = name;
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

/**
 * Returns a string.
 *
 * @method ()
 * @public
 * @param {}           -,
 * @returns {String}   returns a string,
 * @since 0.0.0
 */
obj.getString = function() {
  return 'I am a string!';
};

/**
 * Returns an array.
 *
 * @method ()
 * @public
 * @param {}          -,
 * @returns {Array}   returns an array,
 * @since 0.0.0
 */
obj.getArray = function() {
  return [1, 2, 3];
};
/* - */
