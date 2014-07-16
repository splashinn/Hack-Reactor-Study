// stringReduction.js
// splashinn

// Have the function StringReduction(str) take the str parameter being passed
// and return the smallest number you can get through the following reduction
// method. The method is: Only the letters a, b, and c will be given in str and
// you must take two different adjacent characters and replace it with a third.


var replacements =
{
  "ab" : "c",
  "ac" : "b",
  "bc" : "a",
  "ba" : "c",
  "ca" : "b",
  "cb" : "a"
};

function StringReduction(s)
{
  var original, key;
  while( s != original )
  {
   original = s;
   for( key in replacements )
      s = s.replace( key , replacements[key] );
  }
  return s.length;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
StringReduction(readline());
