function sum(xs: number[]): number {
  var s = 0;
  for (var i = 0; i < xs.length; i++) {
    s += xs[i];
  }

  return s;
}

function max(xs: number[]): number {
  var m = -Infinity;
  for (var i = 0; i < xs.length; i++) {
    if (xs[i] > m) {
      m = xs[i];
    }
  }

  return m;
}

var numbers = [-1, -5, -4, -3];

console.log(max(numbers));
