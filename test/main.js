/* global describe, it */
var should = require('chai').should();
var expect = require('chai').expect;
var umdlib = require('../index.js');

describe('UMDLib', function() {

  // Test the first 'method'.
  describe('The method getArray()', function() {
    it ('Should return an array.', function() {
      var a = umdlib.getArray();
      a.should.be.a('array');
    });
  });

  // Test the second 'method'.
  describe('The method getString()', function() {
    it ('Expects to return a string.', function() {
      expect(umdlib.getString()).to.be.a('string');
    });
  });

});
