function factorial_recursivo(n: number): number {
  return n == 0 ? 1 : n * factorial_recursivo(n - 1);
}

function factorial_recursivo2(n: number): number {
  function recursion(n: number, acc: number = 1): number {
    return n == 0 ? acc : recursion(n - 1, acc * n);
  }
  return recursion(n, 1);
}

function factorial_iterativo(n: number): number {
  var factorial = 1;
  if (n != 0) {
    for (var i = n; i > 0; i--) {
      factorial = factorial * i;
    }
  }
  return factorial;
}

console.log(factorial_iterativo(3));
console.log(factorial_iterativo(6));
console.log(factorial_iterativo(4));

console.log(factorial_recursivo2(4));

//console.log(factorial_iterativo(300000));
//console.log(factorial_recursivo2(300000, 1));

function map<A, B>(xs: A[], f: (x: A) => B): B[] {
  if (xs.length == 0) {
    return [];
  }

  return [f(xs[0])].concat(map(xs.slice(1), f));
}

function map2<A, B>(xs: A[], f: (x: A) => B): B[] {
  return xs.length == 0 ? [] : [f(xs[0]), ...map(xs.slice(1), f)];
}

console.log(map2([1, 2, 3], (x) => x * 2));

console.log(
  map([1, 2, 3], function (x) {
    return x * 2;
  })
);
