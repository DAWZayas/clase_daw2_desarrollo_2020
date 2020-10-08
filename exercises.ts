function some<A>(xs: A[], p: (x: A) => boolean): boolean {
  for (var i = 0; i < xs.length; i++) {
    if (p(xs[i])) return true;
  }
  return false;
}

some([1, 2, 3, 4], pair); // true
some([1, 3, 5], pair); // false

every([1, 2, 3, 4], pair); // false
every([2, 4, 6], pair); // true

function pair(x: number): boolean {
  return x % 2 == 0;
}

function every<A>(xs: A[], p: (x: A) => boolean): boolean {
  for (var i = 0; i < xs.length; i++) {
    if (!p(xs[i])) return false;
  }
  return true;
}

var xs: [number, string][] = [[1, 'rreerer']];

function zip<A, B>(xs: A[], ys: B[]): [A, B][] {
  var zipped: [A, B][] = [];
  for (var i = 0; i < xs.length && i < ys.length; i++) {
    zipped.push([xs[i], ys[i]]);
  }
  return zipped;
}

console.log(zip([1, 2, 4], ['A', 'B', 'C', 'D'])); // [[1, "A"], [2, "B"], [4, "C"]]
//zipWith([0, 1, 2, 4], [5, 7, 8], sum); // [0+5, 1+7, 2+8]
function sum(x: number, y: number): number {
  return x + y;
}

function zipWith<A, B, C>(xs: A[], ys: B[], f: (x: A, y: B) => C): C[] {
  var zipped: C[] = [];
  for (var i = 0; i < xs.length && i < ys.length; i++) {
    zipped.push(f(xs[i], ys[i]));
  }
  return zipped;
}
console.log(zipWith([0, 1, 2, 4], [5, 7, 8], sum));
// implementar some con reduce
// implementar every con reduce

// implementar zip con zipWith
function zip2<A, B>(xs: A[], ys: B[]): [A, B][] {
  return zipWith(xs, ys, function zipper(x, y) {
    return [x, y];
  });
}

console.log(zip2([1, 2, 3], [2, 4, 6]));
// implmentar map con reduce
// implmentar filter con reduce
