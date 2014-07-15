function area(l, w, h) {
  var area = l * w * h;
  console.log("The area of the shape is " + area + ".");
};
area(2, 2, 2);


// this function finds the area of a triangle
function triangle(b, h) {
  var triangle = b * h / 2;
  console.log("The area of the triangle is " + triangle + ".");
};
triangle(9, 12);

// this function finds the area of a rectangle
function rectangle(l, w) {
  rectangle = l * w;

  if (l < 40) {
    console.log("The area of the rectangle is " + rectangle + ".");
  } else {
    console.log("The area is too large for this project. Try again.");
  }
};
rectangle(4, 5);

// this function finds the area of a circle
function circle(r) {
  var circle = 3.16 * r * r;
  console.log(circle);
};
circle(3);

// finds the diameter of a circle
function diameter(r) {
  var diameter = r * 2;
  console.log("The diameter of this circle is easy to find. Just double the radius that is given! The diameter is " + diameter + ".");
};

// find the mean (average)
function mean(arr) {

}


// count the number of letters in a fragment of text
function letterCount(fragment) {
    return fragment.split("");
};
letterCount("hey hey hey")

//////////

function count(fragment) {
  str = "";
  fragment = str.split("");
  return fragment;
};
count("hey hey hey");

///////////

function foo(x) {
  var tmp = 3;
  function bar(y) {
    console.log(x + y + (++tmp));
  }
  bar(10);
}
foo(2)

//////////

function foo(i) {
  var tmp = 10;
  function bar(k) {
    console.log(i * k + tmp);
  }
  bar(3);
}
foo(12)

///////
