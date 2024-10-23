function sum(a,b) {
    return a + b;
}

//oder

var sum1 = function (a, b) {
    return a + b;
}


console.log(sum(1, 1));

console.log(sum1(1, 1));

var telefon = {
    hersteller: "Apple",
    model: "IPhone 1",
    garantie: 24,
    color: "Schwarz",
    garantieDetails: function () {
        console.log("Dies Produkt hat "
            + this.garantie +
            " Monaten Garantie."
        )
    }
}
telefon.garantieDetails();

// Funktionen als Parameter

console.log("===========Funktionen als Parameter")

function square(x) {
    return Math.pow(x, 2);
}

function cube(x) {
    return Math.pow(x, 3);
}

function sumOfPowers(myFunction, a, b) {
    return myFunction(a) + myFunction(b);
}

console.log(sumOfPowers(square, 2, 3));
console.log(sumOfPowers(cube, 2, 3));


// Funktionen als Rückgabe
function add(x) {
    return function (a) {
        return a + x;
    }
}

var addOne = add(1);
console.log(addOne(2));
console.log(add(1)(2));
console.log(add(2)(3));
