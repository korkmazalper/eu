const obst1={
  name: 'Apfel',
  farbe: 'Rot'
};
obst2 = obst1;
console.log(obst2)
obst1.name = "Banana";
console.log(obst2)
console.log(obst1 === obst2)

console.log(`======================`);
console.log(`=========call-by-value=============`);

var a = 1;
function increment(x) {
    x++;
}
increment(a);
console.log(a);

console.log("====================");
function incrementA() {
    a++;
}
incrementA();
console.log(a);

console.log("========Pass-By-Reference-Object============");
const person1 = {
    name: "Alper",
    age:45
}
function passByReferenceSample(person) {
    person.name = "John";
    person.age++;
}
passByReferenceSample(person1);
console.log(person1);

console.log("========Pass-By-Reference-Array============");

const arr = ["Apfel","Banana","Birne"];
console.log(arr);

function passByReferenceArray(x) {
    x[0] = "Granatapfel";
}
passByReferenceArray(arr);
console.log(arr);