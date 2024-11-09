// Global Variable, defined outside all functions
// Any Function can use it
var a = 1;

function f(x) {
    return x + a;
}

console.log(f(2));
// if you defined a again inside a function, then the function will use that one if needed.
function f2(x) {
    var a = 2;
    return x + a;
}
console.log(f2(3));

/* if a is not found in the scope of the function
 but found in the parameters then the parameter value is 
going to be used.
*/
function g(a) {
    return a + 3;
}
console.log(g(5));

function g1(a) {
    var a = 2;
    return a + 3;
}
console.log(g1(5));


function g2(a) {
    var b = a + 3;
    var a = 10;
    return b;
}
console.log(g1(5));

function h(x) {
    return x + c;
}

console.log(h(1)); // c is undefined
var c = 1;