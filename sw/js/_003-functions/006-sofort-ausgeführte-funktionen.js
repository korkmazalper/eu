// function statement / decleration

function greet() {
    console.log("Hello!")
}
greet();

// function expression
// Ein Funktion-Expression gibt eine Wert zurück.
var greet2 = function () { //Die Funtion wird deklariert.
    console.log("Hi!");
    //return 1;
}(); // Die Funktion wird ausgeführt. Die Rückgabewert wird einer Variable zugewiesen.

console.log(greet2);
// Die in globalen Klammern deklarierten Funktionen können mithilfe von Klammern sofort ausgeführt werden.

(function greet3() {
    console.log("Selam!");
})();

//oder 
(function greet3() {
    console.log("Selam!");
}());

let counter = (function () {
    let count = 0
    return function () {
        count++
        console.log('Zähler:', count)
    }
})();
counter() // Was wird ausgegeben?
counter() // Was wird ausgegeben?
counter() // Was wird ausgegeben?

let rechnerModul = (function () {
  let geheimeZahl = 42

  function addiere(a, b) {
    return a + b
  }

  function getGeheimeZahl() {
    return geheimeZahl
  }

  return {
    addiere,
    getGeheimeZahl
  }
})()

console.log(rechnerModul.addiere(3, 4)) // Was ist die Ausgabe?
console.log(rechnerModul.getGeheimeZahl()) // Was ist die Ausgabe?
console.log(rechnerModul.geheimeZahl) // Was ist die Ausgabe und warum?