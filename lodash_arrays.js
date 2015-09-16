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
  }
}
