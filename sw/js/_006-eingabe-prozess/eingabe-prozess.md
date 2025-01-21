# Aufgabe: Textfeld-Verarbeitung mit HTML, CSS und JavaScript

## Beschreibung
Erstellen Sie eine Webanwendung, die mit einem Textfeld und mehreren Buttons verschiedene Textverarbeitungsfunktionen ausführt. Die Ergebnisse sollen in einem Ausgabebereich angezeigt werden.

## Anforderungen

### **HTML**
1. Erstellen Sie ein **Textfeld**:
   - Typ: `input`
   - Platzhaltertext: „Etwas schreiben...“

2. Fügen Sie vier Buttons hinzu:
   - **„Umkehren“**: Kehrt den eingegebenen Text um.
   - **„Großbuchstaben“**: Wandelt den Text in Großbuchstaben um.
   - **„Wörter zählen“**: Gibt die Anzahl der Wörter im Text aus.
   - **„Vokale entfernen“**: Entfernt alle Vokale aus dem Text.

3. Erstellen Sie einen **Ausgabebereich**:

### **CSS**
1. Gestalten Sie das Layout der Seite ansprechend:
   - Textfeld und Buttons sollten mittig auf der Seite platziert sein.
   - Buttons sollten ein einheitliches Design haben und bei Hover ihre Farbe ändern.

2. Der Ausgabebereich sollte gut lesbar und mit Farben versehen sein, die je nach Aktion variieren.

### **JavaScript**
1. Schreiben Sie Funktionen, die die Aktionen der Buttons ausführen:
   - **Umkehren**: Kehrt die Zeichenfolge im Textfeld um. Beispiel: `Hallo` → `ollaH`
   - **Großbuchstaben**: Wandelt alle Zeichen in Großbuchstaben um. Beispiel: `Hallo` → `HALLO`
   - **Wörter zählen**: Zählt die Wörter im Text. Wörter sind durch Leerzeichen getrennt.
   - **Vokale entfernen**: Entfernt alle Vokale (a, e, i, o, u, ä, ö, ü, groß oder klein) aus dem Text.

2. Validierung:
   - Zeigen Sie eine Fehlermeldung an, wenn das Textfeld leer ist.

3. Verknüpfen Sie die Buttons mit den Funktionen, sodass bei Klick die jeweilige Funktion ausgeführt wird.

## Beispiel-Erwartungen

1. **Eingabe im Textfeld**: `Hallo Welt!`
2. **Button „Umkehren“**:
   - Ausgabe: `!tleW ollaH`
3. **Button „Großbuchstaben“**:
   - Ausgabe: `HALLO WELT!`
4. **Button „Wörter zählen“**:
   - Ausgabe: `Wörteranzahl: 2`
5. **Button „Vokale entfernen“**:
   - Ausgabe: `Hll Wlt!`


## Hinweise
1. Testen Sie Ihre Anwendung in einem Webbrowser.
2. Achten Sie auf saubere und valide HTML- und CSS-Strukturen.
