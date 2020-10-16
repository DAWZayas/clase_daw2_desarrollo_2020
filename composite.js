function double(x) {
    return x + x;
}
function square(x) {
    return x * x;
}
function doubleAfterSquare(x) {
    return double(square(x));
}
function squareAfterDouble(x) {
    return square(double(x));
}
console.log(doubleAfterSquare(3)); // 18
console.log(squareAfterDouble(3)); // 36
