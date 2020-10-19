

function double(x: number): number {
    return x + x;
}

function square(x: number): number {
    return x * x;
}

function inc(x: number): number {
    return x + 1;
}

/*

function doubleAfterSquare(x: number): number {
    return double(square(x));
}

function squareAfterDouble(x: number): number {
    return square(double(x));
}

*/


function compose<A, B, C>(f: (y: B) => C, g: (x: A) => B): (x:A) => C {
    return function (x:A) {
        return f(g(x));
    };
}

function pipe<A, B, C>(f: (x: A) => B, g: (y: B) => C): (x:A) => C {
    return function (x:A) {
        return g(f(x));
    };
}

function flip<A, B, C>(f: (x: A, y: B) => C): (y: B, x: A) => C {
    return function (y: B, x: A) {
        return f(x, y);
    };
}

function reduceRight<A, B>(xs: A[], f: (acc: B, x: A) => B, init: B): B {
    return xs.length == 0 ? init : f(reduceRight(xs.slice(1), f, init), xs[0]);
}


function init<A>(x: A): A {
    return x;
}


function multicompose<A>(...fs: Function[]): (x:A) => any {    
    return reduceRight(fs, function(g, f) {
        return function (x: any) {
            return f(g(x));
        };
    }, init);
}

/*

function multicompose<A>(...fs: Function[]): (x:A) => any {
    return function(x: A) {
        return reduceRight(fs, function(acc, f) {
            return f(acc);
        }, x);
    }
}


function multicompose<A>(...fs: Function[]): (x:A) => any {
    return function(x: A) {
        return fs.length === 0 ? x : multicompose(...fs.slice(0, fs.length -1))(fs[fs.length -1](x));
    }
}


function multicompose<A>(...fs: Function[]): (x:A) => any {
    return function(x: A) {
        var result = x;
        for (var i = fs.length - 1; i >= 0; i--) {
            var f = fs[i];
            result = f(result);
        }
        return result;
    }
}


var pipe = flip(compose);
  
function pipe<A, B, C>(f: (x: A) => B, g: (y: B) => C): (x:A) => C {
    return compose(g, f);
}


function multipipe<A, B>(fs: Function[]): A => B {
    ??????
}
*/


var  squareAfterDouble = compose(square, double);
var doubleAfterSquare = compose(double, square);

console.log(doubleAfterSquare(3)); // 18
console.log(squareAfterDouble(3)); // 36
console.log(doubleAfterSquare(5)); // 18

console.log(compose(square, double)(3)); //36
console.log(pipe(square, double)(3)); // 18

console.log(multicompose(square, double, inc)(3));  // 64 
console.log(multicompose(inc, square, double, inc, double)(1)); // 37

inc(square(double(inc(double(1)))))


//console.log(multicompose([])(1)); // 37

/*

multipipe(square, double, inc)(3);  // 19 
multipipe(inc, square, double, inc, double)(1); // 18
*/