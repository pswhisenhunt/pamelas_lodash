var Lodash_String = require('../lodash_strings');

describe('lodash string suite', function() {
  describe('_camelCase()', function() {
    it ('when given hello world, should return helloWorld', function() {
      expect(Lodash_String._camelCase('hello world')).toEqual('helloWorld');
    });
  });

  describe('_capitalize()', function() {
    it ('should return the string with a capital frist letter', function() {
      expect(Lodash_String._capitalize('hello')).toEqual('Hello');
    });
  });

  describe('_kebabCase()', function() {
    it ('should return a dash inbetween words', function() {
      expect(Lodash_String._kebabCase('foo bar')).toEqual('foo-bar');
    });
  });

  describe('_repeat()', function() {
    it ('should return a string of the char sequence passed repeated x amount of times', function() {
      expect(Lodash_String._repeat('*', 3)).toEqual('***');
    });
  });

  describe('_reverse', function() {
    it ('should return the reversed version of the string', function() {
      expect(Lodash_String._reverse('cat')).toEqual('tac');
    });
  });
});
