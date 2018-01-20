// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, import/no-extraneous-dependencies: 0, semi-style: 0 */

'use strict';

// -- Node modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;

// -- Local modules
const UMDLib = require('../index.js')
    ;

// -- Local constants

// -- Local variables


// -- Main
describe('Test UMDLib:', () => {
  // Test the lib:
  describe('Test UMDLib.VERSION and UMDLib.noConflict:', () => {
    it('Expects UMDLib.VERSION to return a string.', () => {
      expect(UMDLib.VERSION).to.be.a('string');
    });
    it('Expects UMDLib.noConflict to return a function.', () => {
      expect(UMDLib.noConflict).to.be.a('function');
    });
  });

  describe('Test the UMDLib methods:', () => {
    //
    it('Expects UMDLib to own the method "getString".', () => {
      expect(UMDLib.getString).to.be.a('function');
    });

    it('Expects UMDLib.getString() to return the string "I am a string!".', () => {
      expect(UMDLib.getString()).to.be.a('string').that.is.equal('I am a string!');
    });

    it('Expects UMDLib to own the method "getArray".', () => {
      expect(UMDLib.getArray).to.be.a('function');
    });

    it('Expects UMDLib.getArray() to return an array with 3 elements.', () => {
      expect(UMDLib.getArray()).to.be.an('array').that.has.lengthOf(3);
    });

    it('Expects the first element to be equal to 1.', () => {
      expect(UMDLib.getArray()[0]).to.be.a('number').that.is.equal(1);
    });

    it('Expects the second element to be equal to 2.', () => {
      expect(UMDLib.getArray()[1]).to.be.a('number').that.is.equal(2);
    });

    it('Expects the third element to be equal to 3.', () => {
      expect(UMDLib.getArray()[2]).to.be.a('number').that.is.equal(3);
    });
  });
});
