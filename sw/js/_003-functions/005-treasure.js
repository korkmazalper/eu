/** Task 1
 * Create 5 objects box1,...box5 storing content in Kg of each box silver, gold and platinium.
 * Create an object priceKg storing prices per Kg of each substance: silver, gold and platinium.
 * box1:10 kg silver, 5 kg gold, 5 kg platinium
 * box2:5 kg silver, 7 kg gold,  kg platinium
 * box3: 7 kg silver, 3 kg gold, 10 kg platinium
 * box4: 6 kg silver, 6 kg gold, 12 kg platinium
 * box4: 3 kg silver, 12 kg gold, 6 kg platinium
 * Prices per Kg of each substance are: silver 400 EU, gold 40000 EU, platinium 25000 Eu
 *
 */
/** task 2
 * Using a function expression, write function which takes as a parameter a box and calculates its value in EU
 * Store the function in a variable calculateBoxValue
 * 
 */
/** task 3
 * Create a new function calculateTotal which
 * Takes two parameters: a function and an array
 * and returns the total wealth, you would take with you if you go home with 3 boxes of your choice
 * Use a function expression again instead of a function statement
 */

/** task 4
 * For some mysterious reason, you can not take box4 and box5 together or box2 and box3 together
 * play with calculatetotal in the console and find the best combination of boxes to take home.
 */

/** Aufgabe 1
 * Erstelle 5 Objekte box1,...box5, die den Inhalt in kg für jede Box in Silber, Gold und Platin speichern.
 * Erstelle ein Objekt priceKg, das die Preise pro kg für jede Substanz speichert: Silber, Gold und Platin.
 * box1: 10 kg Silber, 5 kg Gold, 5 kg Platin
 * box2: 5 kg Silber, 7 kg Gold, 0 kg Platin
 * box3: 7 kg Silber, 3 kg Gold, 10 kg Platin
 * box4: 6 kg Silber, 6 kg Gold, 12 kg Platin
 * box5: 3 kg Silber, 12 kg Gold, 6 kg Platin
 * Die Preise pro kg jeder Substanz sind: Silber 400 EUR, Gold 40.000 EUR, Platin 25.000 EUR
 *
 */
/** Aufgabe 2
 * Schreibe eine Funktion, die als Funktionsausdruck definiert ist und eine Box als Parameter nimmt, um deren Wert in EUR zu berechnen.
 * Speichere die Funktion in einer Variablen calculateBoxValue.
 * 
 */
/** Aufgabe 3
 * Erstelle eine neue Funktion calculateTotal, die
 * zwei Parameter nimmt: eine Funktion und ein Array,
 * und den Gesamtwert berechnet, den man mitnehmen würde, wenn man mit 3 Boxen seiner Wahl nach Hause geht.
 * Verwende wieder einen Funktionsausdruck anstelle einer Funktionsdeklaration.
 */

/** Aufgabe 4
 * Aus einem mysteriösen Grund darfst du box4 und box5 nicht zusammen oder box2 und box3 nicht zusammen mitnehmen.
 * Spiele in der Konsole mit calculateTotal und finde die beste Kombination der Boxen, die du mit nach Hause nehmen kannst.
 */


var box1 = {
    silver: 10,
    gold: 5,
    platinium:5
}

var box2 = {
    silver: 5,
    gold: 7,
    platinium:8
}
var box3 = {
    silver:7 ,
    gold: 3,
    platinium:10
}
var box4 = {
    silver:6 ,
    gold: 6,
    platinium:12
}
var box5 = {
    silver: 3,
    gold: 12 ,
    platinium:5
}

var priceKg = {
    silver: 400,
    gold: 40000,
    platinium:25000
}

var calculateBoxValue = function (box) {
    return box.silver * priceKg.silver
        + box.gold * priceKg.gold
        + box.platinium * priceKg.platinium;
}

var calculateTotal = function (f, boxes) {
    var result = 0;
    for (let index = 0; index < 3; index++) {
            result += f(boxes[index]);
            
        }
    return "Take home:" + result + " EU.";
}