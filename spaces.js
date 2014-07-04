// takes user input strings and adds them together with proper spacing
// (C) 2014 splashinn

function addWords() {
  var value = $('#input').val();

  if ((/^[a-zA-Z\s]*$/.test(value)) && (value !== '')) {
        value = value.trimLeft().trimRight();
        $('#output').append($('<span></span>').text(value + ' '));
    } else {
        alert('Please use characters only.');
    }
}
