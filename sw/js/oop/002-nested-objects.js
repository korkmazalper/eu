const { exec } = require('child_process');
exec('cls');

const person1 = {
    personal: {
        vorname: "Alper",
        nachname:"Korkmaz"
    },
    geburtsdatum: "12.12.1900",
    hobbies: ["Tennis", "TV", "Fußball"],
    ort: {
        stadt: "Euskirchen",
        PLZ: "01234",
        bundesland: "NRW",
        land:"Deutschland"
    },
    idnummer: null,
    show: function () {
        console.log("Details of person!");
    }

};

/*
Schreiben Sie eine Funktion, die die Eigenschaften eines Objekts ausgibt. 
Die Funktion sollte in der Lage sein, verschachtelte Objekte zu behandeln, 
und dabei für jedes weitere Verschachtelungsniveau eine zusätzliche 
Einrückung (Indentierung) verwenden.

Erstellen Sie eine Funktion, die jede Eigenschaft eines Objekts rekursiv durchläuft.
Wenn der Wert einer Eigenschaft ein weiteres Objekt ist, 
soll die Funktion dieses Objekt ebenfalls durchlaufen und 
die Eigenschaften mit zusätzlicher Einrückung anzeigen.
Andernfalls sollte die Funktion die Eigenschaft und 
ihren Wert auf der aktuellen Einrückungsstufe anzeigen.
*/

function printObject(obj, einrueckung = "") {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] === 'object') {
        console.log(`${einrueckung}${prop}:`);
        printObject(obj[prop], einrueckung + "  ");
      } else {
        console.log(`${einrueckung}${prop}: ${obj[prop]}`);
      }
    }
  }
}
printObject(person1)
console.log(`${"=".repeat(15)}`);
console.log(`Meine name ist ${person1.personal.vorname + " " + person1.personal.nachname}. 
Ich bin aus ${person1.ort.land}.`);
console.log(`${"=".repeat(15)}`);
person1.show()