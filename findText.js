// findText.js
// splashinn

var text = "blah blah blah blah blah blah blah Kyle blah blah blah blah Kyle blah blah Kyle";
var myName = "Kyle";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === "K") {
        for (var j = i; j < myName.length + i; j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found");
} else {
    console.log(hits);
}
