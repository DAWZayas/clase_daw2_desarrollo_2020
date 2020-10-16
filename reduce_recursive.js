function sum(x, y) {
    return x + y;
}
function max(x, y) {
    return x < y ? y : x;
}
//reduce([1,2,3,4], sum, 0) == reduce([2,3,4], sum, 0 + 1 ]) = reduce([3,4], sum, 0 + 1 + 2)
function reduce(xs, f, init) {
    return xs.length == 0 ? init : reduce(xs.slice(1), f, f(init, xs[0]));
}
function reduceRight(xs, f, init) {
    return xs.length == 0 ? init : f(reduceRight(xs.slice(1), f, init), xs[0]);
}
console.log(reduce([1, 2, 3, 4], sum, 0));
console.log(reduceRight([1, 2, 3, 4], sum, 0));
console.log(reduce(["Pepe", "Luis", "Juan"], function (initials, word) {
    return initials + word[0].toUpperCase();
}, "")); //"PLJ"
console.log(reduceRight(["Pepe", "Luis", "Juan"], function (initials, word) {
    return initials + word[0].toUpperCase();
}, "")); //"PLJ"
