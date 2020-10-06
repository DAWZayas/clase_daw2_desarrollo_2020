function double(x: number): number {
  return x * 2;
}

function inc(x: number): number {
  return x + 1;
}

function initial(word: string): string {
  return word.charAt(0);
}

function size(word: string): number {
  return word.length;
}

function map<A, B>(xs: A[], f: (x: A) => B): B[] {
  var ys = [];
  for (var i = 0; i < xs.length; i++) {
    ys.push(f(xs[i]));
  }
  return ys;
}

function doubleArray(numbers: number[]): number[] {
  return map(numbers, double);
}

function incArray(numbers: number[]): number[] {
  return map(numbers, inc);
}

function initials(words: string[]): string[] {
  return map(words, initial);
}

function sizes(words: string[]): number[] {
  return map(words, size);
}

var numbers = [1, 5, 2];
var words = ['Pepe', 'Luis', 'Ana'];

console.log(doubleArray(numbers));
console.log(incArray(numbers));
console.log(initials(words));

console.log(sizes(words)); // [4, 4, 3]
