## Objekte und objektorientierte Programmierung

Wie Arrays sind Objekte in JavaScript **Container** (auch als Aggregat- oder komplexe Datentypen bezeichnet). Objekte haben zwei Hauptunterschiede zu Arrays:

- Arrays enthalten Werte, die **numerisch** indiziert sind; Objekte enthalten Eigenschaften, die durch Strings oder Symbole indiziert werden.
- Arrays sind geordnet (arr[0] kommt immer vor arr[1]); Objekte sind es nicht (man kann nicht garantieren, dass **obj.a** vor **obj.b** kommt).

Diese Unterschiede sind ziemlich esoterisch (aber wichtig), also denken wir über das Merkmal nach, das Objekte wirklich besonders macht. Eine Eigenschaft besteht aus einem Schlüssel (einem String oder Symbol) und einem Wert. Was Objekte besonders macht, ist, dass man auf **Eigenschaften über ihren Schlüssel** zugreifen kann.

### Aufzählung von Eigenschaften(Attributen)

Im Allgemeinen, wenn du den Inhalt des Containers auflisten möchtest (dies wird Enumeration genannt), möchtest du wahrscheinlich ein Array und kein Objekt. Aber Objekte sind Container und unterstützen die Aufzählung von Eigenschaften; du musst nur die damit verbundenen besonderen Komplexitäten berücksichtigen.

Die erste Sache, die du über die Aufzählung von Eigenschaften wissen musst, ist, dass die Reihenfolge nicht garantiert ist. Du könntest einige Tests durchführen und feststellen, dass du die Eigenschaften in der Reihenfolge erhältst, in der du sie eingegeben hast, und das mag für viele Implementierungen die meiste Zeit zutreffen. JavaScript bietet jedoch ausdrücklich keine Garantie dafür, und Implementierungen können sich jederzeit aus Effizienzgründen ändern. Verlass dich also nicht auf eine falsche Sicherheit aufgrund anekdotischer Tests: Gehe niemals davon aus, dass eine bestimmte Reihenfolge der Eigenschaftenaufzählung garantiert ist.

Mit dieser Warnung im Hinterkopf wollen wir nun die Hauptmethoden betrachten, um die Eigenschaften eines Objekts zu enumerieren.

#### for...in

Die traditionelle Methode, die Eigenschaften eines Objekts zu enumerieren, ist `for...in`. Betrachten wir ein Objekt, das einige String-Eigenschaften und eine einzelne Symbol-Eigenschaft hat:

```js
const obj = {
  vorname: 'Alper',
  nachname: 'Korkmaz',
  gender: 1,
  age: 35,
  stadt: 'Euskirchen'
}

for (let prop in obj) {
  if (!obj.hasOwnProperty(prop)) continue
  console.log(`${prop}: ${obj[prop]}`)
}
```

Das scheint ziemlich einfach... außer dass du dich wahrscheinlich fragst, was `hasOwnProperty` macht. Dies adressiert eine Gefahr der `for...in`-Schleife. In diesem Beispiel könnte man es weglassen, und es würde keinen Unterschied machen. Wenn du jedoch die Eigenschaften anderer Objekttypen – insbesondere Objekte, die von woanders her stammen – enumerierst, könntest du Eigenschaften finden, die du nicht erwartet hast. Ich empfehle dir, dir anzugewöhnen, `hasOwnProperty` zu verwenden. Wir werden bald lernen, warum es wichtig ist, und du wirst das Wissen haben, um zu entscheiden, wann es sicher (oder wünschenswert) ist, es wegzulassen.

- Objekte bestehen aus Schlüssel-Wert-Paaren.
- Werte können Literale, Objekte, `null` oder Funktionen sein.
- Objekte können ineinander verschachtelt (nested) werden.
- In der einschlägigen Literatur werden häufig folgende Bezeichnungen verwendet:
  - **Attribut**, **Feld** oder Eigenschaft
  - **Methoden** anstelle von Funktionen
  - Attribute und Methoden werden zusammen als **Member** (Mitglieder) bezeichnet.

### Neues Attribut einfügen oder löschen

Beim Hinzufügen eines neuen Attributs zu einem Objekt in Javascript kann ein neues Feld mit dem Operator `.` und neuer Schlüssel-Wert-Zuweisung hinzugefügt werden. Mit `delete` kann ein bestehendes Feld des Objekts gelöscht werden.

```js
const obst1 = {
  name: 'Apfel',
  farbe: 'Rot'
}
obst1.grosse = 2
console.log(obst1)
delete obst1.grosse
console.log(obst1)
```

### Verschatelte Objekte

```js
const { exec } = require('child_process')
exec('cls')

const person1 = {
  personal: {
    vorname: 'Alper',
    nachname: 'Korkmaz'
  },
  geburtsdatum: '12.12.1900',
  hobbies: ['Tennis', 'TV', 'Fußball'],
  ort: {
    stadt: 'Euskirchen',
    PLZ: '01234',
    bundesland: 'NRW',
    land: 'Deutschland'
  },
  idnummer: null,
  show: function () {
    console.log('Details of person!')
  }
}

function printObject(obj, einrueckung = '') {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] === 'object') {
        console.log(`${einrueckung}${prop}:`)
        printObject(obj[prop], einrueckung + ' ')
      } else {
        console.log(`${einrueckung}${prop}: ${obj[prop]}`)
      }
    }
  }
}
printObject(person1)
console.log(`${'='.repeat(15)}`)
console.log(
  `Meine name ist ${
    person1.personal.vorname + ' ' + person1.personal.nachname
  }. Ich bin aus ${person1.ort.land}.`
)
console.log(`${'='.repeat(15)}`)
person1.show()
```

### Übergabe durch Referenz (Pass-By-Reference)

Wenn ein bestehendes Objekt einer anderen Variablen zugewiesen wird, wird kein neues Objekt erstellt. Die neue Referenz verweist auf dasselbe Objekt im Speicher, und Änderungen an dem Objekt können von beiden Referenzen aus vorgenommen und angezeigt werden.

```js
const obst1 = {
  name: 'Apfel',
  farbe: 'Rot'
}
obst2 = obst1
console.log(obst2)
obst1.name = 'Banana'
console.log(obst2)
console.log(obst1 === obst2)
```

### Object.keys

`Object.keys` gibt uns eine Möglichkeit, alle aufzählbaren String-Eigenschaften eines Objekts als Array zu erhalten:

```js
const SYM = Symbol()

const o = { a: 1, b: 2, c: 3, [SYM]: 4 }

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`))
```

Dieses Beispiel liefert dasselbe Ergebnis wie eine for...in-Schleife (und wir müssen nicht `hasOwnProperty` überprüfen). Es ist nützlich, wenn du die Eigenschaftsschlüssel eines Objekts als Array benötigst. Zum Beispiel erleichtert es das Auflisten aller Eigenschaften eines Objekts, die mit dem Buchstaben "x" beginnen:

```js
const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophon: 5 }

Object.keys(o)
  .filter(prop => prop.match(/^x/))
  .forEach(prop => console.log(`${prop}: ${o[prop]}`))
```

## Objektorientierte Programmierung

Objektorientierte Programmierung (OOP) ist ein altes Paradigma in der Informatik. Einige der Konzepte, die wir heute als OOP kennen, tauchten erstmals in den 1950er Jahren auf, aber es dauerte bis zur Einführung von Simula 67 und dann Smalltalk, bis eine erkennbare Form der OOP entstand.

Die Grundidee ist einfach und intuitiv: **Ein Objekt ist eine logisch zusammenhängende Sammlung von Daten (Zustände) und Funktionen(Verhalten)**. Es ist so konzipiert, dass es unserer natürlichen Auffassung der Welt entspricht. **Ein Auto ist ein Objekt, das Daten hat (Marke, Modell, Anzahl der Türen, VIN usw.) und Funktionalitäten (beschleunigen, schalten, Türen öffnen, Scheinwerfer einschalten usw.)**. Außerdem ermöglicht OOP, **Dinge abstrakt (ein Auto)** und **konkret (ein bestimmtes Auto)** zu betrachten.

- **Eine Klasse bezieht sich auf eine generische Sache (ein Auto)**.
- **Eine Instanz (oder Objektinstanz) bezieht sich auf eine spezifische Sache (ein bestimmtes Auto, wie „Mein Auto“)**.
- Eine **Funktionalität** (beschleunigen) wird als **Methode** bezeichnet. Eine **Funktionalität**, **die sich auf die Klasse bezieht, aber nicht auf eine bestimmte Instanz**, wird als **Klassenmethode** bezeichnet (zum Beispiel könnte „neue VIN erstellen“ eine Klassenmethode sein: Es bezieht sich noch nicht auf ein bestimmtes neues Auto, und sicherlich erwarten wir nicht, dass ein bestimmtes Auto in der Lage ist, eine neue, gültige VIN zu erstellen).
- Wenn eine Instanz erstmals erstellt wird, wird ihr **Konstruktor** ausgeführt. Der Konstruktor initialisiert die Objektinstanz.

OOP gibt uns auch einen Rahmen zur **hierarchischen Kategorisierung von Klassen**. Zum Beispiel könnte es eine allgemeinere Klasse „Fahrzeug“ geben. Ein Fahrzeug hat möglicherweise eine Reichweite (die Distanz, die es ohne Auftanken oder Aufladen zurücklegen kann), aber im Gegensatz zu einem Auto hat es möglicherweise keine Räder (ein Boot ist ein Beispiel für ein Fahrzeug, das wahrscheinlich keine Räder hat). Wir sagen, dass „Fahrzeug“ eine Oberklasse von „Auto“ ist und „Auto“ eine Unterklasse von „Fahrzeug“. Die Fahrzeugklasse kann mehrere Unterklassen haben: Autos, Boote, Flugzeuge, Motorräder, Fahrräder usw. Und Unterklassen können wiederum weitere Unterklassen haben. Zum Beispiel kann die Unterklasse „Boot“ weitere Unterklassen wie Segelboot, Ruderboot, Kanu, Schlepper, Motorboot usw. haben.

Wir werden das Beispiel eines Autos in diesem Kapitel verwenden, da es sich um ein reales Objekt handelt, mit dem wir uns wahrscheinlich alle identifizieren können (auch wenn wir nicht Teil der Autokultur sind).

### Klassen- und Instanz-Erstellung

Vor ES6 war das Erstellen einer Klasse in JavaScript eine umständliche, unintuitive Angelegenheit. ES6 führte einige praktische neue Syntax zur Erstellung von Klassen ein:

```js
class Car {
  constructor() {}
}
```

Dies legt eine neue Klasse namens „Car“ fest. Noch wurden keine Instanzen (spezifische Autos) erstellt, aber wir haben jetzt die Möglichkeit, dies zu tun. Um ein spezifisches Auto zu erstellen, verwenden wir das Schlüsselwort `new`:

```js
const car1 = new Car()
const car2 = new Car()
```

Wir haben nun zwei Instanzen der Klasse „Car“. Bevor wir die Klasse „Car“ weiter verfeinern, betrachten wir den Operator `instanceof`, der dir sagen kann, ob ein gegebenes Objekt eine Instanz einer gegebenen Klasse ist:

```js
car1 instanceof Car // true
car1 instanceof Array // false
```

Daraus sehen wir, dass car1 eine Instanz von „Car“ und nicht von „Array“ ist.

Lassen Sie uns die Klasse „Car“ etwas interessanter machen. Wir geben ihr einige Daten (Marke, Modell) und etwas Funktionalität (schalten):

```js
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
}
```

- Hier wird das Schlüsselwort `this` für seinen vorgesehenen Zweck verwendet: **um auf die Instanz zu verweisen, auf die die Methode aufgerufen wurde**.
- Du kannst dir `this` als **Platzhalter** vorstellen: Wenn du deine Klasse schreibst – die abstrakt ist – dient `this` als **Platzhalter** für eine spezifische Instanz, die bekannt sein wird, wenn die Methode aufgerufen wird.
- Dieser Konstruktor ermöglicht es uns, die Marke und das Modell des Autos beim Erstellen zu spezifizieren.
- Außerdem legt er einige Standardwerte fest: die gültigen Gänge (`userGears`) und den aktuellen Gang (`gear`), den wir auf den ersten gültigen Gang setzen. (Ich habe diese User-Gears(Benutzer-Gänge) genannt, weil, wenn dieses Auto ein Automatikgetriebe hat, es im Fahrmodus einen mechanischen Gang gibt, der möglicherweise anders ist.)

Zusätzlich zum Konstruktor – der implizit aufgerufen wird, wenn wir ein neues Objekt erstellen – haben wir auch eine Methode `shift` erstellt, die es uns ermöglicht, auf einen gültigen Gear(Gang) zu wechseln. Schauen wir uns das in Aktion an:

```js
const car1 = new Car('Tesla', 'Model S')
const car2 = new Car('Mazda', '3i')
car1.shift('D')
car2.shift('R')
```

In diesem Beispiel wird bei der Aufrufung von `car1.shift('D')` `this` an `car1` gebunden. Ebenso ist this bei `car2.shift('R')` an `car2` gebunden. Wir können überprüfen, dass sich `car1` im Fahrgang (D) und `car2` im Rückwärtsgang (R) befindet:

```js
car1.userGear // "D"
car2.userGear // "R"
```

### Dynamische Eigenschaften

Es mag sehr clever erscheinen, dass die `shift`-Methode unserer `Car`-Klasse uns daran hindert, versehentlich einen ungültigen Gang zu wählen. Diese Schutzmaßnahme ist jedoch begrenzt, da nichts uns daran hindert, ihn direkt zu setzen: `car1.userGear = 'X'`. Die meisten objektorientierten Sprachen bieten umfassende Mechanismen zum Schutz vor einer solchen Manipulation, indem sie es ermöglichen, das Zugriffslevel von Methoden und Eigenschaften festzulegen. JavaScript hat keinen solchen Mechanismus, was häufig als Kritikpunkt an der Sprache geäußert wird.

Dynamische Eigenschaften können helfen, diese Schwäche zu mildern. Sie haben die Semantik einer Eigenschaft mit der Funktionalität einer Methode. Lassen Sie uns unsere Car-Klasse ändern, um diese Vorteile zu nutzen:

```js
class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
    this._userGears = ['P', 'N', 'R', 'D']
    this._userGear = this._userGears[0]
  }

  get userGear() {
    return this._userGear
  }
  set userGear(value) {
    if (this._userGears.indexOf(value) < 0) {
      throw new Error(`Ungültiger Gang: ${value}`)
    }
    this._userGear = value
  }

  shift(gear) {
    this.userGear = gear
  }
}
```
