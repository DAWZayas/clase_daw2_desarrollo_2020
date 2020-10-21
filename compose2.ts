function double(x: number): number {
    return x + x;
}

function square(x: number): number {
    return x * x;
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


function map<A, B>(f: (x:A) => B): (xs: A[]) =>  B[]{
    return function(xs: A[]) {
        var ys = [];
        for (var i = 0; i < xs.length; i++) {
            ys.push(f(xs[i]));
        }
        return ys;
    }
}

function filter<A>(f: (x: A) => boolean): (xs: A[]) => A[] {
    return function(xs:A[]) {
        var ys = [];
        for (var i = 0; i < xs.length; i++) {
        if (f(xs[i])) {
            ys.push(xs[i]);
        }
        }
        return ys;
    }
}

function reduce<A, B>(f: (acc: B, x: A) => B, init: B): (xs: A[]) => B {
    return function(xs: A[]) {
        var acc = init;
        for (var i = 0; i < xs.length; i++) {
        acc = f(acc, xs[i]);
        }
    
        return acc;
    }
  }
  

function pair(x: number): boolean {
    return x % 2 == 0;
}
  

function sum(x: number, y: number): number {
    return x + y;
  }
  

console.log(multicompose(reduce(sum, 0), map(double), map(square), filter(pair))([1,2,3,4,5,6])); //112


console.log(multicompose(reduce(sum, 0), map(multicompose(double, square)), filter(pair))([1,2,3,4,5,6])); //112
  
console.log([1,2,3,4,5,6].filter(pair).map(square).map(double).reduce(sum, 0)); // 112