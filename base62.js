// base62.js
// (C) 2014 splashinn

// define the base62 function
var toBase62 = (function() {
  var charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    base = charset.length; // 62

  return function(value) {
    var string = "";
    do {
      string = charset[value % base] + string;
      value = (value/base) | 0;
    } while(value > 0);
    return string;
  }
}());

// loop for a long time
for(var i = 0; l = Math.pow(62, 5); i < l; i++) {
  console.log(toBase62(i));
}
