
  // -- Private ----------------------------------------------------------------

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
  // Create an empty object:
  var obj = {}
    , objMethods
    ;

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
    obj.name = name;
    extend(obj, objMethods);
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


  // -- Public methods ---------------------------------------------------------

  objMethods = {

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
