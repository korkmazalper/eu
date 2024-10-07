# Ampel Aufgabe

## Zustände der Lampen

- Wenn das grüne Licht an ist, wird das gelbe Licht an und das grüne und rote Licht aus.
- Wenn das gelbe Licht an und das rote Licht aus ist, wird das rote Licht an und das grüne und gelbe Licht aus.
- Wenn das rote Licht an und das gelbe Licht aus ist, wird das gelbe Licht an und das grüne Licht aus, das rote Licht bleibt an.
- In allen anderen Fällen wird das grüne Licht an und das gelbe und rote Licht aus.

| Licht  | Zustand 1 | Zustand 2 | Zustand 3 | Zustand 4 |
| ------ | --------- | --------- | --------- | --------- |
| Rot    | x         | x         | 0         | 0         |
| Gelb   | 0         | x         | 0         | x         |
| Grün   | 0         | 0         | x         | 0         |
| Dauer  | 2000MS    | 2000MS    | 2000MS | 2000MS |

## Struktur der Start/Stop Buttons und die Lichter

Es gibt zwei `Button`s mit den IDs `ampelStart` und `ampelStopp`. Diese werden verwendet, um die Ampel zu starten und zu stoppen.

Ein `div` mit der id `ampel` enthält drei kleinere `div`s mit den ids `lampeRot`, `lampeGelb` und `lampeGruen`, die die Lichter der Ampel darstellen.

```html
<button id="ampelStart">start</button>
<button id="ampelStopp">stopp</button>

<br /><br /><br /><br />

<div id="ampel">
  <div id="lampeRot"></div>
  <div id="lampeGelb"></div>
  <div id="lampeGruen"></div>
</div>
```

## Javascript-Teil

```js
const radius = 20;
let timer = null;

ampel.style.backgroundColor = "darkgrey";
ampel.style.width = 2*radius+"px";
ampel.style.height = 6*radius+"px";
ampel.style.borderRadius = 0.2\*radius+"px";

macheEinenKreis(lampeRot, "red");
macheEinenKreis(lampeGelb, "black");
macheEinenKreis(lampeGruen, "black");

```

- Die Variable `radius` repräsentiert den Radius der Lichter.
- Die Variable `timer` wird verwendet, um den Ampelzyklus zu steuern.
- Die Stil-Einstellungen für das ampel-Div werden gesetzt: Hintergrundfarbe, Breite, Höhe und Eckenradius.
- Die Funktion `macheEinenKreis` erstellt einen Kreis für jedes Licht (rot, gelb, grün).

## Event Listener für die Buttons

```js
ampelStart.addEventListener('click', function () {
  clearInterval(timer)
  timer = setInterval(ampelSchalten, 2000)
})

ampelStopp.addEventListener('click', function () {
  clearInterval(timer)
})
```

- Beim Klick auf den ampelStart-Button wird der aktuelle Timer gelöscht und die Funktion ampelSchalten wird alle 2 Sekunden ausgeführt.
- Beim Klick auf den ampelStopp-Button wird der Timer gelöscht und die Ampel gestoppt.

## Kreis-Erstellungen

```js
function macheEinenKreis(element, farbe) {
  element.style.backgroundColor = farbe
  element.style.width = 2 * radius + 'px'
  element.style.height = 2 * radius + 'px'
  element.style.borderRadius = '50%'
}
```

- Diese Funktion setzt die Stil-Einstellungen für das gegebene Element (Ampellicht) und formt es zu einem Kreis. Die Farbe des Lichts wird durch den Parameter `farbe` bestimmt.

## Ampelschaltfunktion

```js
function ampelSchalten() {
  if (lampeGruen.style.backgroundColor == 'lightgreen') {
    lampeGelb.style.backgroundColor = 'yellow'
    lampeGruen.style.backgroundColor = 'black'
    lampeRot.style.backgroundColor = 'black'
  } else if (
    lampeGelb.style.backgroundColor == 'yellow' &&
    lampeRot.style.backgroundColor == 'black'
  ) {
    lampeRot.style.backgroundColor = 'red'
    lampeGruen.style.backgroundColor = 'black'
    lampeGelb.style.backgroundColor = 'black'
  } else if (
    lampeRot.style.backgroundColor == 'red' &&
    lampeGelb.style.backgroundColor == 'black'
  ) {
    lampeGelb.style.backgroundColor = 'yellow'
    lampeGruen.style.backgroundColor = 'black'
    lampeRot.style.backgroundColor = 'red'
  } else {
    lampeGruen.style.backgroundColor = 'lightgreen'
    lampeGelb.style.backgroundColor = 'black'
    lampeRot.style.backgroundColor = 'black'
  }
}
```

Diese Funktion schaltet die Ampellichter in einem bestimmten Zyklus:

- Wenn das grüne Licht an ist, wird das gelbe Licht an und das grüne und rote Licht aus.
- Wenn das gelbe Licht an und das rote Licht aus ist, wird das rote Licht an und das grüne und gelbe Licht aus.
- Wenn das rote Licht an und das gelbe Licht aus ist, wird das gelbe Licht an und das grüne Licht aus, das rote Licht bleibt an.
- In allen anderen Fällen wird das grüne Licht an und das gelbe und rote Licht aus.

| Licht | Zustand | Zustand | Zustand | Zustand |
| ----- | ------- | ------- | ------- | ------- |
| Rot   | x       | x       | 0       | 0       |
| Gelb  | 0       | x       | 0       | x       |
| Grün  | 0       | 0       | x       | 0       |
