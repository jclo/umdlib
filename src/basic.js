/** **************************************************************************
 *
 * A ...
 *
 * basic.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . ...                  ...,
 *
 * Public Functions:
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
/* eslint-disable strict */
UMDLib = {

  /**
   * Returns a string.
   *
   * @function ()
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
   * @function ()
   * @public
   * @param {}          -,
   * @returns {Array}   returns an array,
   * @since 0.0.0
   */
  getArray: function() {
    return [1, 2, 3];
  }
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
/* eslint-enable strict */
