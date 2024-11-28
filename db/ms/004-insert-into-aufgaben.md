# ``insert into`` und ``select``

## ``insert into``

Das SQL-Kommando ``INSERT INTO`` wird verwendet, um Daten in eine Tabelle einzufügen. In den Übungen sehen wir zwei Hauptvarianten:

Einfache Einfügung mit festen Werten (``VALUES``).
Einfügung basierend auf einer Abfrage (``SELECT``).

```mermaid
flowchart TB
    A(INSERT INTO)
    A --> B([Einfache Einfügung mit festen Werten VALUES.])
    A --> C([Einfügung basierend auf einer Abfrage SELECT.])

```
### Einfache Einfügung


```sql
INSERT INTO tabelle (spalte1, spalte2, ...) VALUES (wert1, wert2, ...);

```
Wir fügen mehrere Städte mit ihren jeweiligen Postleitzahlen in die Tabelle stadt_plz ein:

```sql
INSERT INTO stadt_plz (plz, stadt)
VALUES 
('11114', 'Berlin'),
('12340', 'München'),
('50667', 'Köln'),
('60549', 'Frankfurt am Main'),
('20095', 'Hamburg');

```

### Einfügen mit ``SELECT``

Die Kombination von ``INSERT INTO`` mit ``SELECT`` erlaubt das Einfügen von Daten basierend auf vorhandenen Datensätzen aus anderen Tabellen.

```sql
INSERT INTO ziel_tabellenname (spalte1, spalte2, ...)
SELECT spalte_x, spalte_y, ...
FROM quelle_tabelle
WHERE bedingung;

```

oder 

```sql
INSERT INTO ziel_tabelle (spalte1, spalte2)
(SELECT spalte1, spalte2
 FROM quelle_tabelle
 WHERE bedingung);

```

Beispiel:
Wir möchten einen neuen Kunden hinzufügen, der eine Adresse in der Straße "Hauptstrasse 1" hat. Die adresseid holen wir mit einer SELECT-Abfrage aus der Tabelle adresse

```sql
INSERT INTO kunde (kundenvorname, kundennachname, telefonnummer, adresseid)
VALUES ('Markus', 'Fischer', '0123456789', 
       (SELECT adresseid FROM adresse WHERE strasse = 'Hauptstrasse 1'));
```
### Fehler durch fehlende Werte:

- Wenn die Abfrage in SELECT **keinen Datensatz** zurückgibt, schlägt der INSERT-Befehl fehl.
Lösung: Sicherstellen, dass die Bedingung in WHERE korrekt ist.
Referentielle Integrität:

- Wenn FOREIGN KEYS definiert sind, müssen die Abhängigkeiten zwischen Tabellen eingehalten werden.
Beispiel: Die adresseid muss existieren, bevor ein Kunde eingefügt wird.

- Performance bei großen Abfragen:
Abfragen mit verschachteltem SELECT können langsam sein. Es ist ratsam, Daten vorab zu prüfen oder mit JOIN zu optimieren.

INSERT INTO ist ein mächtiges Werkzeug in SQL, insbesondere in Kombination mit SELECT. Es ermöglicht:

- Dynamisches Einfügen von Daten.
- Verknüpfung mehrerer Tabellen.
- Sicherstellen der Datenkonsistenz.

## Übungen - Gruppe 1

### 1. Aufgabe
Füge eine neue Stadt in die Tabelle `stadt_plz` ein:
- Stadt: "Hannover"
- Postleitzahl: "30159"



### 2. Aufgabe
Füge einen neuen Kunden in die Tabelle `kunde` ein:
- Vorname: "Markus"
- Nachname: "Fischer"
- Telefonnummer: "0123456789"
- Adresse: Verwende die `adresseid`, die zur Straße "Hauptstrasse 1" gehört.



### 3. Aufgabe
Füge einen neuen Verlag in die Tabelle `verlag` ein:
- Verlagsname: "Hannover Verlag"



### 4. Aufgabe
Füge einen neuen Autor in die Tabelle `author` ein:
- Vorname: "Lisa"
- Nachname: "Müller"
- Alter: 30


### 5. Aufgabe
Füge eine neue Adresse in die Tabelle `adresse` ein:
- Straße: "Lindenstraße 12"
- Stadt: Verwende die `stadtplzid`, die zur Postleitzahl "23456" gehört.



## Übungen Gruppe 2

### 6. Aufgabe
Füge ein neues Buch in die Tabelle `buch` ein:
- Titel: "Das geheime Leben"
- Seitenanzahl: 320
- Anschaffungsdatum: "2023-12-01"
- Preis: 25,99
- Verlag: Verwende die `verlagid`, die zu "Sprinegr" gehört.
- Autor: Verwende die `authorid`, die zu "Lisa Müller" gehört.



### 7. Aufgabe
Füge eine neue Stadt in die Tabelle `stadt_plz` ein, die eine bestehende Adresse verwendet:
- Stadt: "Darmstadt"
- Postleitzahl: "64283"



### 8. Aufgabe
Füge einen neuen Kunden in die Tabelle `kunde` ein:
- Vorname: "Clara"
- Nachname: "Weber"
- Telefonnummer: "0176543210"
- Adresse: Verwende die `adresseid`, die zur Straße "Lindenstraße 12" gehört.



### 9. Aufgabe
Füge einen neuen Verleihvorgang in die Tabelle `verleihvorgang` ein:
- Buchnummer: Verwende die `buchnummer`, die zu "Das geheime Leben" gehört.
- Kundennummer: Verwende die `kundennummer`, die zu "Clara Weber" gehört.
- Ausleihdatum: "2024-01-15"
- Rückgabedatum: "2024-01-30"



### 10. Aufgabe
Füge einen neuen Verlag in die Tabelle `verlag` ein:
- Verlagsname: "Fantasy Verlag"



## Übungen - Gruppe 3

### 11. Aufgabe
Füge eine neue Adresse und einen neuen Kunden hinzu:
- Adresse: "Marktplatz 4", Stadt: "Frankfurt" (PLZ: "56789")
- Kunde: "Sandra Hoffmann", Telefonnummer: "0178456789"



### 12. Aufgabe
Füge ein neues Buch hinzu, das einem neuen Verlag und Autor zugeordnet wird:
- Autor: "Eva Braun", Alter: 35
- Verlag: "Braun Verlag"
- Buch: "Das Leben in Zahlen", Seitenanzahl: 400, Preis: 32,50, Anschaffungsdatum: "2024-03-01"



### 13. Aufgabe
Füge fünf neue Bücher in die Tabelle `buch` ein, die alle zum gleichen Autor ("Peter Schneider") und Verlag ("Sprinegr") gehören. Die Titel, Seitenanzahl und Preise sind beliebig.



### 14. Aufgabe
Simuliere einen Verleihvorgang, bei dem ein ``neuer Kunde`` hinzugefügt wird, ein ``neues Buch`` für ihn erstellt wird und dieses Buch direkt ausgeliehen wird:
- Kunde: "Thomas Meier", Telefonnummer: "0157891234", Adresse: "Bergstraße 11", Stadt: "Hamburg" (PLZ: "23456")
- Buch: "Abenteuer in Hamburg", Seitenanzahl: 150, Preis: 19,50, Verlag: "Hamburg Verlag", Autor: "Thomas Meier"
- Verleihvorgang: Ausleihdatum: "2024-12-01", Rückgabedatum: "2024-12-31"


### 15. Aufgabe
Simuliere einen komplexen Verleihvorgang, bei dem:
1. Ein neuer Kunde mit neuer Adresse erstellt wird.
2. Zwei neue Bücher, von verschiedenen Verlagen und Autoren, hinzugefügt werden.
3. Beide Bücher vom neuen Kunden ausgeliehen werden.

- Kunde: "Anna Fischer", Telefonnummer: "0123456789", Adresse: "Bahnhofstr. 10", Stadt: "Weimar" (PLZ: "99427")
- Buch 1: "Die Nacht", Seitenanzahl: 280, Preis: 19.90, Verlag: "Fantasy Verlag", Autor: "Hans Meier"
- Buch 2: "Der Morgen", Seitenanzahl: 320, Preis: 22.50, Verlag: "Braun Verlag", Autor: "Eva Braun"


