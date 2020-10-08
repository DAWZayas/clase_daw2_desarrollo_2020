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

/*
reduce([1,2,3], reducer, false)

xs = [1,2,3]
f = reducer
init = false

acc = false
i = 0
0 < 3 
acc = reducer(false, 1) = false
i = 1
1  < 3
acc = reducer(false, 2) = true

i = 2
2 < 3
acc = reducer(true, 3) = true

i = 3

3 < 3 , n, retorno true
*/

function pair(x: number): boolean {
  return x % 2 == 0;
}

/*
function map<A, B>(xs: A[], f: (x: A) => B): B[] {
  return reduce(xs, ????, [])
}
*/

function someWithReduce<A>(xs: A[], p: (x: A) => boolean): boolean {
  return reduce(
    xs,
    function reducer(acc: boolean, x) {
      return acc || p(x);
    },
    false
  );

  /*
  acc = false 
  x = 1
  return false || pair(1) , retorna false


  acc = false
  x = 2
  return false || pair(2), retorna true


  acc = true
  x = 3
  return true || pair(3), retorna true
  */
}

/*
xs = [1,2,3] p = pair

reduce([1,2,3], reducer, false)
*/

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
console.log(someWithReduce([1, 2, 3], pair));
console.log(someWithReduce([1, 3], pair));
console.log(someWithReduce([], pair));
