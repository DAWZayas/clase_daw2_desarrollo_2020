function add(x, y) {
    return x + y;
}

function product(x, y) {
    return x * y;
}

function inc(x) {
    return x + 1;
}

z = inc(product(inc(5), add(3, 4))); //43

console.log(z)

function asyncAdd(x, y, callback) {
    setTimeout(function() {
        callback(x+y);
    }, 0);
}

function asyncProduct() {

}

function asyncInc() {

}

asyncAdd(3,4, function(z) {
    console.log(inc(product(inc(5), z)));
});


