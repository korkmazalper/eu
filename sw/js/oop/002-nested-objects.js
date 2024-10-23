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