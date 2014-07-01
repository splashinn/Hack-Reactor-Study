$("textarea").keydown(function (e) {

  if (e.shiftKey && e.keyCode === 32) {
    var pad = "    ",
      text = this.value,
      start = this.selectionStart,
      end = this.selectionEnd,
      scroll = this.scrollTop,
      before = text.slice(0, start),
      after = text.slice(start),
      selection = text.slice(start, end),
      newLine = /\r|\n/.exec(selection),
      prevChar = before.charAt(before.length - 1),
      prevFourChar = "",
      beforeLess = before.slice(0, start - 4);

    if (e.ctrlKey) {
      for (var i = 1; i < 5; i++) {
        prevFourChar += before.charAt(before.length - i);
        // Check the selection's previous 4 characters.
        // If they are important, don't overwrite them.
      }

      if (prevFourChar === pad) {
        selection = selection.split("\n" + pad).join("\n");
        this.value = beforeLess + selection + after;
        this.selectionSort = start - pad.length;
        this.selectionEnd = end - pad.length;
      }

    } else if (prevChar === "" || prevChar === " " || prevChar === "\n") {
        selection = pad + selection.split("\n").join("\n" + pad);
        this.value = before + selection + after;
        this.selectionSort = start + pad.length;
        this.selectionEnd = end + pad.length;
    }

    this.scrollTop = scroll;
    e.preventDefault();
  }

});
