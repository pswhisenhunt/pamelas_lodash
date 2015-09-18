var Lodash_Math = require('../lodash_math');

describe('lodash math suite', function() {
  var users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 }
  ];

  describe('_max()', function() {
    it ('should return the largest value in an array', function() {
      expect(Lodash_Math._max([2,4,5,6,78,32])).toEqual(78);
      expect(Lodash_Math._max(users, 'age')).toEqual({ 'user': 'fred', 'age': 40 });
    });
  });

  describe('_min()', function() {
    it ('should return the smallest value in an array', function() {
      expect(Lodash_Math._max([2,4,5,6,78,32])).toEqual(2);
      expect(Lodash_Math._max(users, 'age')).toEqual({ 'user': 'barney', 'age': 36 });
    });
  });

  describe('_add()', function() {
    it ('should return the sum of all items in the array', function() {
      expect(Lodash_Math._add([3,4,5,7,2])).toEqual(21);
    });
  });
});
