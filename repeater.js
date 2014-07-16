// repeater.js
// splashinn

// Write a function to find the first non-repeated character in a string.
function repeater(string) {
  var charCount = {};
  for(var i = 0; i < string.length; i++) {
    if(charCount[string[i]]) {
      charCount[string[i]] "More Than One";
    } else {
        charCount[string[i]] "One Time";
    }
  }
  for(var j = 0; j < string.length; j++) {
    if(charCount[string[j]] === "One Time") {
      return string.charAt(j);
    }
  }

  return "Everything is repeated";
}
