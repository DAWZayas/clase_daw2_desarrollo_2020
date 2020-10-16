function sum(x: number, y: number): number {
    return x + y;
}

function max(x: number, y: number): number {
    return x < y ? y : x;
}

//reduce([1,2,3,4], sum, 0) == reduce([2,3,4], sum, 0 + 1 ]) = reduce([3,4], sum, 0 + 1 + 2)

function reduce<A, B>(xs: A[], f: (acc: B, x: A) => B, init: B): B {
    return xs.length == 0 ? init : reduce(xs.slice(1), f, f(init, xs[0]));
}


// reduce(["Pepe", "Luis", "Juan"], f, "")-----> reduce(["Luis", "Juan"], f, "P")-----> reduce(["Juan"], f, "PL")------> reduce(["Juan"], f, "PL")----> reduce([], f, "PLJ") ----> "PLJ"

function reduceRight<A, B>(xs: A[], f: (acc: B, x: A) => B, init: B): B {
    return xs.length == 0 ? init : f(reduceRight(xs.slice(1), f, init), xs[0]);
}

/*

reduceRight(["Pepe", "Luis", "Juan"], f, "") ----> f(reduceRight(["Luis", "Juan"], f, ""), "Pepe") ---> f("JL", "Pepe") ---> "JLP"
                                                            |
                                                            |---------> f(reduceRight(["Juan"], f, ""), "Luis")  ------> f("J", "Luis") ----> "JL"
                                                                                |
                                                                                | -----------> f(reduceRight([], f, ""), "Juan") ----> f("", "Juan") ----> "J"
                                                                                                    |
                                                                                                    |---------> ""
*/
console.log(reduce([1, 2, 3, 4], sum, 0));
console.log(reduceRight([1, 2, 3, 4], sum, 0));

console.log(reduce(["Pepe", "Luis", "Juan"], function (initials, word) {
    return initials + word[0].toUpperCase();
}, ""))  //"PLJ"

console.log(reduceRight(["Pepe", "Luis", "Juan"], function (initials, word) {
    return initials + word[0].toUpperCase();
}, ""))  //"JLP"