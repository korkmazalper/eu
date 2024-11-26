const personKrankenhaus = {
    vorname: "X",
    nachname: "Y",
    kontakt: {
        adresse: ".....",
        telefon: ".....",
        email:"a@b.com"
    },
    blutGruppe: "ABRh+",
    geburtsdatum: "1.1.1970",
    gender: 1,
    isRaucher: 0,
    verheiratet: "J",
    beruf: "TTT",
    groeße: 189,
    gewicht: 120,
    genetisches: "etwas etwas etwas"
}

const personSchule = {
    vorname: "X",
    nachname: "Y",
    kontakt: {
        adresse: ".....",
        telefon: ".....",
        email:"a@b.com"
    },
    noten: {
        unterStufe: {
            mathe: 2,
            SW: 3,
            DB: 4,
            sport:4
        },
        mitteStufe: {
            mathe: 1,
            SW: 0,
            DB:4
        },
        oberstufe: {
            mathe: 1,
            SW: 3,
            DB:1
        }
    }
}


class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
    this.userGears = ['P', 'N', 'R', 'D']
    this.userGear = this.userGears[0]
    }
   
  shift(gear) {
    if (this.userGears.indexOf(gear) < 0) {
      throw new Error(`Ungültiger Gang: ${gear}`)
    }
    this.userGear = gear
    }
    toJSON() {
        return {
            make: this.make,
            model: this.model,
            
        };
    }
}

var car1 = new Car();
car1.baujahr = 2020;
car1.farbe = "Gelb";
car1.inhaber = "Max Mustermann";

var car2 = new Car();
car2.marke = "Skoda";
car2.farbe = "Weiß";
car2.baujahr = 2012;



var car3 = new Car("Ford", "Mustang");
var car4 = new Car("Toyota");


console.log(JSON.stringify(car3));


