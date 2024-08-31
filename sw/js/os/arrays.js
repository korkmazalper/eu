//for (var i = 0; i < 10; i++) {
//    dizi[i] = i * i;
//}
function printOnConsole(x) {
for (var i = 0; i < x.length; i++) {
  console.log(x[i] + '. ')
    
    }   
console.log("===========");    
}
var sequence = new Array(10, 3, 4, 5, 4);
printOnConsole(sequence);

printOnConsole(sequence.reverse());


printOnConsole(sequence.sort());

