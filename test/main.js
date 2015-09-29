/* global describe, it */
var should = require('chai').should();
var umdlib = require('../index.js');

describe('UMDLib', function() {

  // Test the first 'method'.
  describe('getArray', function() {
    it ('Should be an array.', function() {
      var a = umdlib.getArray();
      a.should.be.a('array');
    });
  });

  // Test the second 'method'.
  describe('getString', function() {
    it ('Should be a string.', function() {
      var s = umdlib.getString();
      s.should.be.a('string');
    });
  });

});
