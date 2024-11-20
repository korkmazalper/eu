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
function berechneDurchschnitt() {
  // Noten von den Eingabefeldern abrufen
  let note1 = parseFloat(document.getElementById('note1').value)
  let note2 = parseFloat(document.getElementById('note2').value)
  let projekt = parseFloat(document.getElementById('projekt').value)
  let sonstiges = parseFloat(document.getElementById('sonstiges').value)

  if (isNaN(note1) || isNaN(note2) || isNaN(projekt) || isNaN(sonstiges)) {
    console.log('Ungültige Eingabe.')
  } else {
    var durchschnittnote = (note1 + note2 + projekt + sonstiges) / 4
    document.getElementById('average').value = durchschnittnote

    var buchstabeNote
    if (durchschnittnote > 90) {
      buchstabeNote = 'A'
    } else if (durchschnittnote > 80) {
      buchstabeNote = 'B'
    } else if (durchschnittnote > 70) {
      buchstabeNote = 'C'
    } else if (durchschnittnote > 60) {
      buchstabeNote = 'D'
    } else {
      buchstabeNote = 'F'
    }
    document.getElementById('grade').value = buchstabeNote
  }
}

/** 
  if (isNaN(note1) || isNaN(note2) || isNaN(projekt) || isNaN(sonstiges)
  || note1<0 || note1>100 || note2<0 || note2>100) {
  alert("Bitte gültige Noten eingeben.");
  return;
  }

             // Durchschnitt berechnen
             let durchschnitt = (note1 + note2 + projekt + sonstiges) / 4;
             document.getElementById("average").value = durchschnitt.toFixed(2);

             // Durchschnitt in Buchstabenbewertung umwandeln
             let buchstabenbewertung;
             if (durchschnitt >= 90) {
                 buchstabenbewertung = "A";
             } else if (durchschnitt >= 80) {
                 buchstabenbewertung = "B";
             } else if (durchschnitt >= 70) {
                 buchstabenbewertung = "C";
             } else if (durchschnitt >= 60) {
                 buchstabenbewertung = "D";
             } else {
                 buchstabenbewertung = "F";
             }

             // Buchstabenbewertung ausgeben
             document.getElementById("grade").value = buchstabenbewertung;

  \*/
```


