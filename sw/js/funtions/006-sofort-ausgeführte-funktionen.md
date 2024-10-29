# Funktionsdeklaration und -ausdruck in JavaScript

JavaScript bietet zwei Hauptarten von Funktionen: Funktionsdeklarationen und Funktionsexpressionen. Beide haben unterschiedliche Einsatzmöglichkeiten und Besonderheiten.

## Funktionsdeklaration (function statement / declaration)

Eine Funktionsdeklaration definiert eine Funktion, die später im Code aufgerufen werden kann. Funktionsdeklarationen sind hoisted, das bedeutet, sie können vor ihrer Deklaration im Code aufgerufen werden.

```js
function greet() {
  console.log('Hello!')
}
greet() // Ausgabe: Hello!
```

In diesem Beispiel wird die Funktion `greet` deklariert und dann durch den Aufruf `greet()` ausgeführt.

## Funktionsexpression (function expression)

Eine Funktionsexpression hingegen speichert eine Funktion als Wert in einer Variablen. Funktionsexpressionen sind **nicht hoisted**, daher können sie **erst nach ihrer Deklaration aufgerufen** werden.

```js
var greet2 = (function () {
  console.log('Hi!')
})() // Die Funktion wird sofort ausgeführt und ihr Rückgabewert wird einer Variable zugewiesen.
console.log(greet2) // Ausgabe: Hi!
```

Hier wird die Funktion direkt bei der Definition ausgeführt, indem sie am Ende `()` erhält. Das Ergebnis dieser Ausführung wird der Variable `greet2` zugewiesen.

IIFE (**Immediately Invoked Function Expression**): In JavaScript können wir Funktionen in Klammern setzen und sie sofort aufrufen, indem wir sie mit `()` abschließen. Solche Funktionen werden **Immediately Invoked Function Expressions** (IIFE) genannt. Sie sind nützlich, um **isolierte Funktionsbereiche zu schaffen** und **Variablenkollisionen zu vermeiden**.

```js
;(function greet3() {
  console.log('Selam!')
})()
```

oder

```js
;(function greet3() {
  console.log('Selam!')
})()
```

## Zusammenfassung

- Funktionsdeklaration (`function myFunction() {...}`): Definiert eine Funktion und erlaubt, sie überall im Gültigkeitsbereich aufzurufen.
- Funktionsexpression (`var myFunction = function() {...}`): Speichert eine Funktion in einer Variablen und kann nur nach der Definition aufgerufen werden.
- IIFE (`(function() {...})()`): Führt eine Funktion sofort aus, nachdem sie definiert wurde.

Diese unterschiedlichen Funktionsarten bieten Flexibilität und Kontrolle in der Strukturierung von JavaScript-Code und sind besonders hilfreich, um den **Gültigkeitsbereich** von Variablen klar zu definieren.

## Beispiel 1: Einfaches IIFE zur Scope-Verwaltung (Gültigkeitsbereich-Verwaltung)

Mit dem Einsatz eines IIFE stellen wir sicher, dass eine Variable nur in einem bestimmten Scope existiert. Dies ist besonders nützlich, um Namenskonflikte in großen Projekten zu vermeiden.

```js
;(function () {
  let message = 'Hallo, diese Nachricht ist nur innerhalb des IIFE zugänglich!'
  console.log(message)
})()
console.log(message) // Was gibt diese Zeile zurück und warum?
```

**Frage**:
Was passiert, wenn `console.log(message)`; außerhalb des IIFE ausgeführt wird? Erklären Sie das Ergebnis.

**Lösung**:
`console.log(message);` außerhalb des IIFE führt zu einem Fehler (ReferenceError: message is not defined), da die Variable message nur innerhalb des IIFE existiert und nicht außerhalb zugänglich ist. Dies zeigt, wie ein IIFE die Datenkapselung ermöglicht.

## Beispiel 2: Zuweisung ohne Einfluss auf globale Variablen

In diesem Beispiel wird gezeigt, wie eine lokale Variable innerhalb eines IIFE erstellt wird, ohne eine globale Variable desselben Namens zu überschreiben.

```js
let zahl = 10

;(function () {
  let zahl = 5
  console.log('Zahl innerhalb des IIFE:', zahl) // Was wird ausgegeben?
})()

console.log('Globale Zahl:', zahl) // Was wird ausgegeben?
```

**Frage**:
Was sind die Ausgaben für zahl innerhalb des IIFE: und Globale zahl: und warum unterscheiden sie sich?

**Lösung**:
Die Ausgaben sind `zahl` innerhalb des IIFE: 5 und Globale `zahl`: 10. Die Variable `zahl` innerhalb des IIFE ist unabhängig von der globalen Variable `zahl`, da sie in einem eigenen Scope definiert ist.

## Beispiel 3: Zähler mit einem IIFE

Hier erstellen wir mit einem IIFE einen Zähler. Dieser Zähler verwendet eine private count-Variable, die nur über eine spezifische Funktion zugänglich ist.

```js
let counter = (function () {
  let count = 0
  return function () {
    count++
    console.log('Zähler:', count)
  }
})()
counter() // Was wird ausgegeben?
counter() // Was wird ausgegeben?
counter() // Was wird ausgegeben?
```

**Frage:**
Was ist die Ausgabe des Codes und warum wird die count-Variable bei jedem Aufruf erhöht, ohne dass sie von außen zugänglich ist?
**Lösung:**
Die Ausgaben sind Zähler: 1, Zähler: 2 und Zähler: 3. Die count-Variable ist innerhalb des IIFE definiert und daher von außen nicht zugänglich. Sie kann nur durch die zurückgegebene Funktion erhöht werden, was die Kapselung und Datensicherheit gewährleistet.

## Beispiel 4: Parametrisierte IIFE

Dieses Beispiel zeigt, wie Werte an ein IIFE übergeben und innerhalb des Scopes verwendet werden können.

```js
let name = 'Ahmet'(function (name) {
  console.log('Hallo ' + name + '!')
})(name)
```

**Frage**:
Was wird ausgegeben, und warum ist es wichtig, Parameter an ein IIFE zu übergeben?

**Lösung**:
Die Ausgabe ist **Hallo Ahmet**!. Durch die Übergabe eines Parameters können spezifische Werte innerhalb des IIFE verwendet werden, ohne dass das IIFE auf globale Variablen angewiesen ist. Dies vermeidet Namenskonflikte und sorgt für eine isolierte Ausführung.

## Beispiel 5: Modulare Struktur mit einem IIFE

Mit einem IIFE können wir ein Modul erstellen und nur die notwendigen Funktionen für den Zugriff von außen freigeben.

```js
let rechnerModul = (function () {
  let geheimeZahl = 42

  function addiere(a, b) {
    return a + b
  }

  function getGeheimeZahl() {
    return geheimeZahl
  }

  return {
    addiere,
    getGeheimeZahl
  }
})()

console.log(rechnerModul.addiere(3, 4)) // Was ist die Ausgabe?
console.log(rechnerModul.getGeheimeZahl()) // Was ist die Ausgabe?
console.log(rechnerModul.geheimeZahl) // Was ist die Ausgabe und warum?
```

**Frage**:
Was ist die Ausgabe und warum kann die Variable geheimeZahl nicht direkt von außen erreicht werden?

**Lösung**:
Die Ausgaben sind 7, 42 und undefined. Die geheimeZahl ist nur innerhalb des IIFE verfügbar, daher kann sie von außen nicht direkt angesprochen werden. Stattdessen erlaubt uns die Funktion getGeheimeZahl(), auf ihren Wert zuzugreifen. Diese Struktur schafft eine sichere und gekapselte Umgebung für das Modul.

## Beispiel 4: Parametrisierte IIFE

Dieses Beispiel zeigt, wie Werte an ein IIFE übergeben und innerhalb des Scopes verwendet werden können.

```js
let name = 'Spiderman'

;(function (name) {
  console.log('Hallo ' + name + '!')
})(name)
```

**Frage**:
Was wird ausgegeben, und warum ist es wichtig, Parameter an ein IIFE zu übergeben?

**Lösung**:
Die Ausgabe ist **Hallo Spiderman!**. Durch die Übergabe eines Parameters können spezifische Werte innerhalb des IIFE verwendet werden, ohne dass das IIFE auf globale Variablen angewiesen ist. Dies vermeidet Namenskonflikte und sorgt für eine isolierte Ausführung.

## Beispiel 5: Modulare Struktur mit einem IIFE

```js
let rechnerModul = (function () {
  let geheimeZahl = 42

  function addiere(a, b) {
    return a + b
  }

  function getGeheimeZahl() {
    return geheimeZahl
  }

  return {
    addiere,
    getGeheimeZahl
  }
})()

console.log(rechnerModul.addiere(3, 4)) // Was ist die Ausgabe?
console.log(rechnerModul.getGeheimeZahl()) // Was ist die Ausgabe?
console.log(rechnerModul.geheimeZahl) // Was ist die Ausgabe und warum?
```

**Frage:**
Was ist die Ausgabe und warum kann die Variable geheimeZahl nicht direkt von außen erreicht werden?

**Lösung:**
Die Ausgaben sind 7, 42 und undefined. Die geheimeZahl ist nur innerhalb des IIFE verfügbar, daher kann sie von außen nicht direkt angesprochen werden. Stattdessen erlaubt uns die Funktion getGeheimeZahl(), auf ihren Wert zuzugreifen. Diese Struktur schafft eine sichere und gekapselte Umgebung für das Modul.
