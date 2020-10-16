

function double(x: number): number {
    return x + x;
}

function square(x: number): number {
    return x * x;
}

function inc(x: number): number {
    return x + 1;
}


function doubleAfterSquare(x: number): number {
    return double(square(x));
}

function squareAfterDouble(x: number): number {
    return square(double(x));
}


console.log(doubleAfterSquare(3)); // 18
console.log(squareAfterDouble(3)); // 36


function compose<A, B, C>(f: (x: B) => C, g: (y: A) => B): A => C {
    return ????
}

function pipe<A, B, C>(f: (x: A) => B, g: (y: B) => C): A => C {
    return ????
}


function multicompose<A, B>(fs: Function[]): A => B {
    ??????
}

function multipipe<A, B>(fs: Function[]): A => B {
    ??????
}


var doubleAfterSquare = compose(square, double);
var squareAfterDouble = compose(double, square);

multicompose(square, double, inc)(3);  // 64 
multicompose(inc, square, double, inc, double)(1); // 37

multipipe(square, double, inc)(3);  // 19 
multipipe(inc, square, double, inc, double)(1); // 18
