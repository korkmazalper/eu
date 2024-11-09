var x=prompt("Aelter eingeben:");
console.log(x);
window.alert("Ergebnis: " + x);
eval("var a=1;");
console.log(a);

// time functions
var x = 0;
function count() {

    console.log(x);
    document.getElementById('counterDisplay').innerHTML = x;
    x++;
    if (x == 10) {
        clearInterval(counter);
    }
}

var counter = setInterval(count, 1000);
setTimeout(function () {
    console.log("warte für fünf Sekunde!");
},5000);