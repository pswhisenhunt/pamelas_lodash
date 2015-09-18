// Math functions

module.exports = {
  _max: function(val, prop) {
    var largest;
    if (prop) {
      largest = val[0];
      for (key in val) {
        if (val[key][prop] > largest[prop]) {
          largest = val[key];
        }
      }
      return largest;
    }
    else {
      largest = val[0];
      for (var i = 0; i < val.length; i++) {
        if (val[i] > largest) {
          largest = val[i];
        }
      }
      return largest;
    }
  },

  _min: function(val, prop) {
    var smallest;
    if (prop) {
      smallest = val[0];

      for (key in val) {
        if (val[key][prop] < smallest[prop]) {
          smallest = val[key];
        }
      }
      return smallest;
    }
    else {
     smallest = val[0];
     for (var i = 0; i < val.length; i++) {
       if (val[i] < smallest) {
         smallest = val[i]
       }
     }
     return smallest;
    }
  },

  _add: function(arr) {
    return arr.reduce(function(prev, curr) {
      return prev + curr;
    },0)
  }
}
