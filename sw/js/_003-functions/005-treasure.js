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