# Vererbung

Vererbung (Inheritance) ist ein grundlegendes Konzept in der objektorientierten Programmierung (OOP). Es beschreibt die Fähigkeit einer Klasse, die Eigenschaften und Methoden einer anderen Klasse zu übernehmen. Im Kontext von JavaScript kann Vererbung auf verschiedene Weisen umgesetzt werden, vor allem durch die Verwendung von `class` und `extends`.

- Basisklasse (Superklasse): Dies ist die Klasse, deren Eigenschaften und Methoden vererbt werden. Sie wird in JavaScript mit class definiert.
- Unterklasse (Subklasse): Dies ist die Klasse, die von einer anderen Klasse erbt und Zugriff auf deren Eigenschaften und Methoden hat. Die Vererbung erfolgt mit dem Schlüsselwort extends.

## Vorteile der Vererbung

- Wiederverwendbarkeit des Codes: Vererbung ermöglicht es, gemeinsamen Code in der Superklasse zu definieren und in den Subklassen wiederzuverwenden, was zu weniger Duplikation führt.
- Erweiterbarkeit: Subklassen können neue Methoden und Eigenschaften hinzufügen, wodurch die Funktionalität erweitert werden kann, ohne den Code der Basisklasse zu ändern.
- Klarheit und Organisation: Durch die Vererbung können verwandte Klassen logisch organisiert werden, was die Lesbarkeit und Wartbarkeit des Codes verbessert.

## Eigenschaften der Vererbung in JavaScript

- Konstruktor-Aufruf: Eine Unterklasse muss die Methode `super()` im Konstruktor aufrufen, um den Konstruktor der Basisklasse auszuführen.
- Überschreibung: Methoden der Superklasse können in der Unterklasse überschrieben werden, um spezifisches Verhalten zu definieren.
- Zugriff auf Superklassen-Methoden: Mit `super.methodName()` kann die Methode der Superklasse innerhalb der Unterklasse aufgerufen werden.

```mermaid
classDiagram
Tier <|-- Saeugetier
Tier <|-- Vogel

    class Tier {
        +Name:String
        +Alter:int
        +essen()
    }

    class Saeugetier {
        +Fellfarbe:String
        +laufen()
    }
    Saeugetier <|-- Katze

    class Katze {
        +Augenfarbe:String
        +miauen()
    }

    class Vogel {
        +Fluegelspannweite:float
        +fliegen()
    }
    Vogel <|-- Spatz

    class Spatz {
        +zwitschern()
    }

```


```js
// Basisklasse
class Tier {
constructor(name, alter) {
this.name = name;
this.alter = alter;
}
essen() {
console.log(`${this.name} isst.`);
}
}

// Unterklasse Saeugetier
class Saeugetier extends Tier {
constructor(name, alter, fellfarbe) {
super(name, alter);
this.fellfarbe = fellfarbe;
}
laufen() {
console.log(`${this.name} läuft.`);
}
}

// Unterklasse Katze
class Katze extends Saeugetier {
constructor(name, alter, fellfarbe, augenfarbe) {
super(name, alter, fellfarbe);
this.augenfarbe = augenfarbe;
}
miauen() {
console.log(`${this.name} miaut.`);
}
}

// Unterklasse Vogel
class Vogel extends Tier {
constructor(name, alter, fluegelspannweite) {
super(name, alter);
this.fluegelspannweite = fluegelspannweite;
}
fliegen() {
console.log(`${this.name} fliegt mit einer Flügelspannweite von ${this.fluegelspannweite} Metern.`);
}
}

// Spezifische Vogel-Unterklasse Spatz
class Spatz extends Vogel {
zwitschern() {
console.log(`${this.name} zwitschert fröhlich.`);
}
}

// Instanziierung der Katze-Klasse
const meineKatze = new Katze('Minka', 2, 'grau', 'grün');
meineKatze.essen(); // Ausgabe: "Minka isst."
meineKatze.miauen(); // Ausgabe: "Minka miaut."

// Instanziierung der Spatz-Klasse
const meinSpatz = new Spatz('Chirpy', 1, 0.25);
meinSpatz.essen(); // Ausgabe: "Chirpy isst."
meinSpatz.fliegen(); // Ausgabe: "Chirpy fliegt mit einer Flügelspannweite von 0.25 Metern."
meinSpatz.zwitschern(); // Ausgabe: "Chirpy zwitschert fröhlich."

```


```mermaid
classDiagram
Tier <|-- Saeugetier
Tier <|-- Fisch
Tier <|-- Vogel

    class Tier {
        +Alter:int
        +Geschlecht:String
        +Gewicht:float
        +Name:String
        +essen()
        +schlafen()
    }

    class Saeugetier {
        +Fellfarbe:String
        +Lebensraum:String
        +BeineAnzahl:int
        +saugen()
    }
    Saeugetier <|-- Hund
    Saeugetier <|-- Katze
    Saeugetier <|-- Pferd

    class Hund {
        +Rasse:String
        +LieblingsSpielzeug:String
        +istTrainiert:bool
        +bellen()
        +spielen()
    }

    class Katze {
        +Augenfarbe:String
        +LieblingsFutter:String
        +KrallenLaenge:float
        +miauen()
        +kratzen()
    }

    class Pferd {
        +Hoehe:float
        +RennGeschwindigkeit:int
        +Farbe:String
        +wiehern()
        +rennen()
    }

    class Fisch {
        +FlossenAnzahl:int
        +Lebensraum:String
        +Gewicht:float
        +schwimmen()
    }
    Fisch <|-- Lachs
    Fisch <|-- Thunfisch

    class Lachs {
        +Geburtsfluss:String
        +Laichzeit:int
        +Laenge:float
        +springen()
        +laichen()
    }

    class Thunfisch {
        +Art:String
        +MaxTiefe:int
        +FangGewicht:float
        +schnellSchwimmen()
        +tiefTauchen()
    }

    class Vogel {
        +FluegelSpannweite:float
        +Federfarbe:String
        +BeineAnzahl:int
        +fliegen()
    }
    Vogel <|-- Spatz
    Vogel <|-- Adler

    class Spatz {
        +Singslaute:String
        +MaxHoehe:float
        +Nistmaterial:String
        +zwitschern()
        +kleinFliegen()
    }

    class Adler {
        +Kragengroesse:float
        +AugenSchärfe:int
        +Lebensdauer:int
        +kreisendFliegen()
        +greifen()
    }


```


# Standard-Hierarchie in Javascript


```mermaid
classDiagram
Object <|-- Function : extends
Object <|-- Array : extends
Object <|-- Date : extends
Object <|-- RegExp : extends
Object <|-- Error : extends

Object : +constructor
Object : +**proto**
Object : +**defineGetter**()
Object : +**defineSetter**()
Object : +**lookupGetter**()
Object : +**lookupSetter**()
Object : +hasOwnProperty()
Object : +isPrototypeOf()
Object : +propertyIsEnumerable()
Object : +toLocaleString()
Object : +toString()
Object : +valueOf()

Function : +arguments
Function : +caller
Function : +length
Function : +name
Function : +apply()
Function : +bind()
Function : +call()
Function : +toString()

Array : +length
Array : +concat()
Array : +copyWithin()
Array : +entries()
Array : +every()
Array : +fill()
Array : +filter()
Array : +find()
Array : +findIndex()
Array : +flat()
Array : +flatMap()
Array : +forEach()
Array : +includes()
Array : +indexOf()
Array : +join()
Array : +keys()
Array : +lastIndexOf()
Array : +map()
Array : +pop()
Array : +push()
Array : +reduce()
Array : +reduceRight()
Array : +reverse()
Array : +shift()
Array : +slice()
Array : +some()
Array : +sort()
Array : +splice()
Array : +toLocaleString()
Array : +toString()
Array : +unshift()
Array : +values()

Date : +constructor
Date : +getDate()
Date : +getDay()
Date : +getFullYear()
Date : +getHours()
Date : +getMilliseconds()
Date : +getMinutes()
Date : +getMonth()
Date : +getSeconds()
Date : +getTime()
Date : +getTimezoneOffset()
Date : +getUTCDate()
Date : +getUTCDay()
Date : +getUTCFullYear()
Date : +getUTCHours()
Date : +getUTCMilliseconds()
Date : +getUTCMinutes()
Date : +getUTCMonth()
Date : +getUTCSeconds()
Date : +setDate()
Date : +setFullYear()
Date : +setHours()
Date : +setMilliseconds()
Date : +setMinutes()
Date : +setMonth()
Date : +setSeconds()
Date : +setTime()
Date : +setUTCDate()
Date : +setUTCFullYear()
Date : +setUTCHours()
Date : +setUTCMilliseconds()
Date : +setUTCMinutes()
Date : +setUTCMonth()
Date : +setUTCSeconds()
Date : +toDateString()
Date : +toISOString()
Date : +toJSON()
Date : +toLocaleDateString()
Date : +toLocaleString()
Date : +toLocaleTimeString()
Date : +toString()
Date : +toTimeString()
Date : +toUTCString()
Date : +valueOf()

RegExp : +constructor
RegExp : +dotAll
RegExp : +flags
RegExp : +global
RegExp : +hasIndices
RegExp : +ignoreCase
RegExp : +lastIndex
RegExp : +multiline
RegExp : +source
RegExp : +sticky
RegExp : +unicode
RegExp : +compile()
RegExp : +exec()
RegExp : +test()
RegExp : +toString()

Error : +constructor
Error : +message
Error : +name
Error : +toString()

```

```mermaid
classDiagram
Object <|-- Function
Object <|-- Array
Object <|-- Date
Object <|-- RegExp
Object <|-- Map
Object <|-- Set
Object <|-- WeakMap
Object <|-- WeakSet
Object <|-- Error
Error <|-- EvalError
Error <|-- RangeError
Error <|-- ReferenceError
Error <|-- SyntaxError
Error <|-- TypeError
Error <|-- URIError
Object <|-- Promise
Object <|-- Intl
Object <|-- JSON
Object <|-- Math
Object <|-- Reflect
Object <|-- Proxy
Object <|-- BigInt
Object <|-- Symbol
Object <|-- Atomics
Object <|-- SharedArrayBuffer
Object <|-- ArrayBuffer
Object <|-- DataView
Object <|-- Int8Array
Object <|-- Uint8Array
Object <|-- Uint8ClampedArray
Object <|-- Int16Array
Object <|-- Uint16Array
Object <|-- Int32Array
Object <|-- Uint32Array
Object <|-- Float32Array
Object <|-- Float64Array

```
