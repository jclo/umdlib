  /** **************************************************************************
   *
   * A ...
   *
   * basicplus.js is based on a variation of the basic.js pattern. The
   * properties are added dynamically. Thus, it can be divided in several
   * chunks of properties and the build can produces several versions of the
   * library by including or not some chunks.
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
   * **************************************************************************/


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
  var extend = function(object, methods) {
    var keys = Object.keys(methods)
      , i
      ;

    for (i = 0; i < keys.length; i++) {
      object[keys[i]] = methods[keys[i]];
    }
  }; /* eslint-enable no-param-reassign */


  // -- Public -----------------------------------------------------------------

  // Initializes the object:
  UMDLib = {
   //
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


  // -- Public Functions -------------------------------------------------------
  extend(UMDLib, {

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
  });
