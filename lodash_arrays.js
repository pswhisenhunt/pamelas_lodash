// Array functions


module.exports = {
  _chunk: function(arr, size) {
    var lengthOfChunks = Math.floor(arr.length/size);
    var howManyArrs = Math.floor(arr.length/lengthOfChunks);
    var newArray = [];

    for (var i = 0; i < howManyArrs; i++) {
      var chunk = [];
      for (var j = 0; j < lengthOfChunks; j++) {
        chunk.push(arr[j]);
      }
      arr = arr.splice(chunk.length, arr.length);
      newArray.push(chunk);
    }
    return newArray;
  },

  _compact: function(arr) {
    return arr.filter(Boolean);
  },

  _drop: function(arr, num) {
    if (!num) { num = 1 };
    for (var i = 0; i < num; i++) {
      arr.shift();
    }
    return arr;
  },

  _dropRight: function(arr, num) {
    if (!num) { num = 1 };
    for (var i = 0; i < num; i++) {
      arr.pop();
    }
    return arr;
  },

  _fill: function(arr, filler) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = filler;
    }
    return arr;
  },

  _flatten: function(arr, isDeep) {
    var flatten = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        flatten = flatten.concat.call(flatten, arr[i]);
      }
      else {
        flatten.push(arr[i]);
      }
    }
    return flatten;
  },

  _flattenDeep: function(arr) {
    var flatten = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        flatten = flatten.concat(this._flatten.call(flatten, arr[i]));
      }
      else {
        flatten.push(arr[i]);
      }
    }
    return flatten;
  }
}
