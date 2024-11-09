/**
 * 
 * In JavaScript ermöglicht diese Struktur 
 * die Erzeugung und Rückgabe von Funktionen basierend auf einer 
 * bestimmten Bedingung. 
 * Solche Funktionen, die andere Funktionen zurückgeben, 
 * werden als höhere Ordnungsfunktionen (Higher-Order Functions) bezeichnet.
 */


function greeting(language) {
    if (language.toLowerCase() == "english") {
        return function (name) {
                return "Hello "+ name + " Welcome !";            
        }
    } else if(language.toLowerCase() == "german") {
        return function (name) {
                return "Hallo "+ name + " Willcommen !";            
        }
    }
    return function (name) {
        return "I speak only German and English !"
    }
}

console.log(greeting('english')("alp")); // vorsicht: Funktionsaufruf
console.log(greeting('german')("alp")); 
console.log(greeting('x')("alp")); 
