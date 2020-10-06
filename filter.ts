function pairs(xs: number[]): number[] {
  return filter(xs, pair);
}

function pair(x: number): boolean {
  return x % 2 == 0;
}

function filter<A>(xs: A[], f: (x: A) => boolean): A[] {
  var ys = [];
  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i])) {
      ys.push(xs[i]);
    }
  }
  return ys;
}

function isAdult(x: number): boolean {
  return x >= 18;
}

function adults(ages: number[]): number[] {
  return filter(ages, isAdult);
}

console.log(pairs([1, 2, 3, 4]));
console.log(adults([18, 2, 300, 49]));

console.log(adults([12, 18, 21, 34, 14])); // [18,21,34]
