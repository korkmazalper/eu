# Auto Aufgabe - Composition-Aggregation
In dieser Aufgabe geht es darum, ein einfaches Objektmodell für Autos zu erstellen, das Motoren und Reifen enthält. Jedes Auto hat einen bestimmten Motortyp (Benzin, Diesel oder Elektro) und Reifen einer bestimmten Marke. Dabei soll die Beziehung zwischen den Klassen die Grundprinzipien der objektorientierten Programmierung (OOP) widerspiegeln: **Komposition** sowie **Aggregation**.


**Klassen erstellen:**

Erstellen Sie eine Motorklasse mit den Eigenschaften:
typ: Typ des Motors (z. B. Benzin, Diesel, Elektro)
marke: Marke des Motors
Eine Methode starten, die den Startstatus des Motors zurückgibt.
Erstellen Sie drei Unterklassen von Motor: BenzinMotor, DieselMotor und ElektroMotor. Jede Unterklasse soll die Methode starten so überschreiben, dass sie spezifische Nachrichten für den jeweiligen Motortyp ausgibt.
**Reifen-Klasse:**

Erstellen Sie eine Reifen-Klasse mit den Eigenschaften:
marke: Marke des Reifens
Eine Methode details, die die Marke des Reifens zurückgibt.
**Auto-Klasse:**

Erstellen Sie eine Auto-Klasse mit den Eigenschaften:
- marke: Marke des Autos
- farbe: Farbe des Autos
- motor: Ein Motorobjekt 
- reifen: Ein Reifenobjekt
Die Klasse soll eine Methode details haben, die alle Informationen über das Auto (Marke, Farbe, Motor und Reifen) zurückgibt.

**HTML-Formular und Interaktivität:**
Erstellen Sie ein HTML-Formular, mit dem Benutzer ein Auto mit folgenden Eingaben hinzufügen können:

- Automarke
- Autofarbe
- Motortyp (Dropdown mit den Optionen Benzin, Diesel, Elektro)
- Reifenmarke
- Beim Absenden des Formulars soll ein neues Auto-Objekt erstellt und zu einer Liste hinzugefügt werden.

**Autoliste anzeigen:**

Zeigen Sie alle hinzugefügten Autos in einer Liste an. Jedes Auto sollte seine Details anzeigen (einschließlich Motor- und Reifeninformationen).
Beispielausgabe:

Ein Benutzer fügt ein Auto hinzu mit:

Marke: Toyota
Farbe: Rot
Motortyp: Benzin
Reifenmarke: Michelin

Die Ausgabe in der Liste sollte wie folgt aussehen:

`Benzin Motor gestartet! Rot Toyota, Reifenmarke: Michelin`
 


















