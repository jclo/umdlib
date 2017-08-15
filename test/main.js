// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, import/no-extraneous-dependencies: 0 */

'use strict';

// -- Node modules
const should = require('chai').should()
    , expect = require('chai').expect
    ;

// -- Local modules
const umdlib = require('../index.js')
    ;

// -- Local constants

// -- Local variables


// -- Main
describe('UMDLib', () => {
  // Test the first 'method'.
  describe('The method getArray()', () => {
    it('Should return an array.', () => {
      const a = umdlib.getArray();
      a.should.be.a('array');
    });
  });

  // Test the second 'method'.
  describe('The method getString()', () => {
    it('Expects the method to return a string.', () => {
      expect(umdlib.getString()).to.be.a('string');
    });
  });
});
