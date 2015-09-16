var Lodash_Arrays = require('../lodash_arrays');

describe('lodash array suite', function() {
  describe('_chunk()', function() {
    it ('should return the new array containing chunks of the specifed size', function() {
      expect(Lodash_Arrays._chunk([1,2,3,4,5,6,7,8], 2)).toEqual([[1,2,3,4], [5,6,7,8]]);
      expect(Lodash_Arrays._chunk([1,2,3,4,5,6,7,8,9], 3)).toEqual([[1,2,3], [4,5,6], [7,8,9]]);
    });
  });
});
