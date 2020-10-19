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

console.log(multicompose(map(double), map(square))([1,2,3]))
  