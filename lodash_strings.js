// String functions

module.exports = {
  _camelCase: function(str) {
    str = str.split(' ');
    var newStr = str[0];
    for (var i = 1; i <= str.length-1; i++) {
      newStr += this._capitalize(str[i]);
    }
    return newStr;
  },

  _capitalize: function(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  },

  _kebabCase: function(str) {
    return str.split(' ').join('-');
  },

  _repeat: function(str, num) {
    var i = 0, array = [];
    while (i < num) {
      array.push(str);
      i++
    }
    return array.join('');
  },

  _reverse: function(str) {
    return str.split('').reverse().join('');
  }
};
