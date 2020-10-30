function drop<A>(xs: A[], n: number): A[] {
  return xs.slice(n);
}

function take<A>(xs: A[], n: number): A[] {
  return xs.slice(0, n);
}

console.log(drop([1, 4, 5, 6, 7], 4)); //[6,7]
console.log(drop([1, 4], 3)); //[]

console.log(take([1, 4], 3)); // [1,4]
console.log(take([1, 4, 5, 6, 7], 4)); //[1,4,5,6]
//flippedTake(3, [1, 4]); // [1,4]

function flip<A, B, C>(f: (x: A, y: B) => C): (y: B, x: A) => C {
  return function (y: B, x: A) {
    return f(x, y);
  };
}

var flippedTake = flip(take);

console.log(flippedTake(3, [1, 2, 4, 6, 5])); // [1,2,4]
