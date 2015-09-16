var Lodash_Arrays = require('../lodash_arrays');

describe('lodash array suite', function() {
  describe('_chunk()', function() {
    it ('should return the new array containing chunks of the specifed size', function() {
      expect(Lodash_Arrays._chunk([1,2,3,4,5,6,7,8], 2)).toEqual([[1,2,3,4], [5,6,7,8]]);
      expect(Lodash_Arrays._chunk([1,2,3,4,5,6,7,8,9], 3)).toEqual([[1,2,3], [4,5,6], [7,8,9]]);
    });
  });

  describe('_compact()', function() {
    it ('should return an array that has been filtered of all falsy values', function() {
      expect(Lodash_Arrays._compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
      expect(Lodash_Arrays._compact([0, null, '',false,2])).toEqual([2]);
    });
  });

  describe('_drop()', function() {
    it ('should creates a slice of array with n elements dropped from the beginning.', function() {
      expect(Lodash_Arrays._drop([1, 2, 3])).toEqual([2,3]);
      expect(Lodash_Arrays._drop([1,2,3,4], 2)).toEqual([3,4]);
    });
  });

  describe('_dropRight()', function() {
    it ('should creates a slice of array with n elements dropped from the end.', function() {
      expect(Lodash_Arrays._dropRight([1, 2, 3])).toEqual([1,2]);
      expect(Lodash_Arrays._dropRight([1, 2, 3], 2)).toEqual([1]);
    });
  });
});
