// function statement
console.log(sum(3, 4));
function sum(a, b) {
    return a + b;
}

//function expression
//greet("Jenny")
var greet = function (name) {
    console.log("Mein name ist:" + name);
};
greet("Mark");

// function parameters

function sum2(myFunction, myArray) {
    var result = 0;
    for (let index = 0; index < myArray.length; index++) {
        result += myFunction(myArray[index]);
    }
    return result;
}

var y = sum2(function (x) {
    return x * x;
}, [1, 2, 3]);

console.log(y);