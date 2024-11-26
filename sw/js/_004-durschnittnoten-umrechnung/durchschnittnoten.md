# Aufgabe Buchstabensystem

## Erstelle eine HTML-Seite mit Eingabefeldern, in die der Benutzer die Noten für Klassenarbeit 1, Klassenarbeit 2, Projekt und Sonstiges eingeben kann. Schreibe eine JavaScript-Funktion, die den Durchschnitt der eingegebenen Noten berechnet und diesen sowohl als numerischen Wert als auch als Buchstabenbewertung in Ausgabefelder ausgibt.

### Beschreibung des Umrechnungssystems

Bewertungsmaßstab:
A (Sehr gut): 90–100 Punkte
Steht für eine exzellente Leistung und ein tiefes Verständnis des Themas. Der Schüler hat alle Anforderungen übertroffen.
B (Gut): 80–89 Punkte
Eine gute Leistung, bei der die meisten Anforderungen erfüllt wurden. Es gibt ein gutes Verständnis des Materials mit kleinen Fehlern oder Lücken.
C (Befriedigend): 70–79 Punkte
Eine befriedigende Leistung, die zeigt, dass die Grundanforderungen erfüllt wurden, aber es gibt merkliche Schwächen oder Wissenslücken.
D (Ausreichend): 60–69 Punkte
Eine ausreichende Leistung, die das Mindestmaß an Akzeptanz erreicht. Es gibt deutliche Schwächen und Wissenslücken, aber ein gewisses Grundverständnis ist vorhanden.
F (Ungenügend): Unter 60 Punkte
Eine unzureichende Leistung, die die Anforderungen nicht erfüllt. Der Schüler hat erhebliche Schwierigkeiten oder große Wissenslücken.

```js
function berechneDurchschnittsnoteUndBuschstabennote() {
  let note1 = parseFloat(document.getElementById('note1').value)
  let note2 = parseFloat(document.getElementById('note2').value)
  let projekt = parseFloat(document.getElementById('projekt').value)
  let sonstiges = parseFloat(document.getElementById('sonstiges').value)

  if (isNaN(note1) || isNaN(note2) || isNaN(projekt) || isNaN(sonstiges)) {
    console.log('Ungültige Eingabe.')
  } else {
    var durchschnittsnote = (note1 + note2 + projekt + sonstiges) / 4
    document.getElementById('average').value = durchschnittsnote

    var buchstabenNote
    if (durchschnittsnote > 90) {
      buchstabeNote = 'A'
    } else if (durchschnittsnote > 80) {
      buchstabeNote = 'B'
    } else if (durchschnittsnote > 70) {
      buchstabeNote = 'C'
    } else if (durchschnittsnote > 60) {
      buchstabeNote = 'D'
    } else {
      buchstabeNote = 'F'
    }
    document.getElementById('grade').value = buchstabeNote
  }
}

```
In diesem Beispiel übernimmt die Funktion ``berechneDurchschnittnoteUndBuschtabenNote()`` mehrere Aufgaben:

Sie validiert die Noteneingaben.
Sie berechnet die Durchschnittsnote.
Sie wandelt die Durchschnittsnote in eine Buchstabennote um.
Gemäß den Prinzipien der Programmierung sollte jede Einheit – sei es eine Funktion, Methode oder ein Modul – genau eine klar definierte Aufgabe übernehmen.

Daher sollte der Code verbessert werden, indem diese Aufgaben voneinander getrennt und einzeln bearbeitet werden. Aber wie?

Um diese Aufgaben voneinander zu trennen, sollte jede Aufgabe als eigene Funktion geschrieben werden. Dabei können sich die Funktionen gegenseitig aufrufen, um die gewünschte Funktionalität zu erfüllen.

