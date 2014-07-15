// Example higher order function
// splashinn

function addTwo(x) {
  return x + 2;
}

function double(x) {
  return x * 2;
}

function map(func, list) {
  var output = [];
  for (idx in list) {
    output.push(func(list[idx]));
  }
  return output;
}

map(addTwo, [5, 6, 7]) // 8, 9, 10
map(double, [10, 20, 30]) // 20, 40, 60
