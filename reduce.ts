function sum(x: number, y: number): number {
  return x + y;
}

function max(x: number, y: number): number {
  return x < y ? y : x;
}

function reduce<A, B>(xs: A[], f: (acc: B, x: A) => B, init: B): B {
  var acc = init;
  for (var i = 0; i < xs.length; i++) {
    acc = f(acc, xs[i]);
  }

  return acc;
}

function initials(words: string[]): string {
  return reduce(
    words,
    function (acc, word) {
      return acc + word[0].toUpperCase();
    },
    ''
  );
}

function maxArray(xs: number[]): number {
  return reduce(xs, max, -Infinity);
}

var numbers = [-1, -5, -4, -3];

console.log(maxArray(numbers));
console.log(initials(['Pepe', 'Luis', 'ana'])); // "PLA";
