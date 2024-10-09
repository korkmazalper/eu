# SQL Anweisungen

## SELECT - Anweisung

Die `SELECT` Anweisung wird verwendet, um Daten aus einer Datenbank auszuwählen.

```sql
SELECT spalte1, spalte2, ...
FROM tabellenname;

```

Wenn Sie alle Spalten zurückgeben möchten, ohne jeden Spaltennamen anzugeben, können Sie die SELECT folgende Syntax verwenden:

```sql
SELECT *
FROM tabellenname;
```

## SELECT DISTINCT - Anweisung

Die `SELECT DISTINCT` Anweisung wird verwendet, um nur unterschiedliche Werte zurückzugeben.

```sql
SELECT DISTINCT spalte1, spalte2, ...
FROM tabellenname;

SELECT DISTINCT Stadt FROM stadt_plz;

```

## WHERE-Klausel

Die `WHERE` Klausel wird zum Filtern von Datensätzen verwendet.
Es wird verwendet, um nur die Datensätze zu extrahieren, die eine bestimmte Bedingung erfüllen.

```sql
SELECT spalte1, spalte2, ...
FROM tabellenname
WHERE Bedingung;


SELECT *
FROM kunde
WHERE kundennachname="Mustermann";

```

### Operatoren in der WHERE-Klausel

```sql
select *
from buch
where anschaffungsdatum>"2023-01-01";

```

- Die folgenden Operatoren können in der `WHERE` Klausel verwendet werden:

| Smbol   | Anlam                                                  |
| ------- | ------------------------------------------------------ |
| $$=$$   | Gleich                                                 |
| $$>$$   | Größer als                                             |
| $$<$$   | Kleiner als                                            |
| $$>=$$  | Größer als oder gleich                                 |
| $$<=$$  | Kleiner als oder gleich                                |
| $$<>$$  | Nicht gleich                                           |
| $$!=$$  | Nicht gleich                                           |
| BETWEEN | Zwischen einem bestimmten Bereich \*                   |
| LIKE    | Suche nach einem Muster \*                             |
| IN      | Um mehrere mögliche Werte für eine Spalte anzugeben \* |

## ORDER BY

Das `ORDER BY` Schlüsselwort wird verwendet, um den Ergebnissatz in aufsteigender oder absteigender Reihenfolge zu sortieren.

```sql
SELECT spalte1, spalte2, ...
FROM tabellenname
ORDER BY spalte1, spalte2, ... ASC|DESC;

```

- Das `ORDER BY` Schlüsselwort sortiert die Datensätze standardmäßig in aufsteigender Reihenfolge. Um die Datensätze in absteigender Reihenfolge zu sortieren, verwenden Sie das `DESC`
  Schlüsselwort.
- Bei Zeichenfolgenwerten `ORDER BY` werden die Schlüsselwörter alphabetisch sortiert.
- Um die Tabelle in umgekehrter alphabetischer Reihenfolge zu sortieren, verwenden Sie das `DESC` Schlüsselwort.

```sql
SELECT * FROM kunde
ORDER BY kundennachname DESC;

```

### ORDER BY Mehrere Spalten

```sql
SELECT * FROM kunde
ORDER BY kundennachname, kundenvorname;

```

### Sowohl ASC als auch DESC verwenden

```sql
SELECT * FROM kunde
ORDER BY kundennachname DESC, kundenvorname ASC;

```

### Aufgabe [Bibliothek Datenbank v4.0 SQL-Script](../Bibliothek/bibliothek.md)

1. Welche Kunden haben den Vornamen 'Max'?

2. Welche Bücher kosten mehr als 30 Euro?

3. Welche Verleihvorgänge haben ein Rückgabedatum vor dem 15. September 2024?

4. Welche Autoren sind zwischen 30 und 40 Jahre alt?

5. Welche Postleitzahlen gehören zur Stadt 'Köln'?

6. Welche Adressen enthalten 'Haupt' in der Straße?

7. Welche Verlage haben den Namen 'Elsevier'?

8. Welche Verleihvorgänge haben ein Ausleihdatum nach dem 10. August 2024?

9. Wie lauten die Bücher geordnet nach dem Anschaffungsdatum absteigend?

10. Wie lauten die Kunden geordnet nach dem Nachnamen aufsteigend?

11. Welche Bücher haben weniger als 300 Seiten?

12. Welche Autoren sind älter als 50 Jahre?

13. Welche Verleihvorgänge gehören zum Kunden mit der Kundennummer 1?

14. Welche Verlage enthalten 'Media' im Namen?

15. Welche Bücher kosten zwischen 20 und 40 Euro und wie lauten diese aufsteigend nach dem Preis geordnet?

16. Welche Kunden wohnen in einer Adresse mit der Stadt-PLZ-ID 1?

17. Welche Verleihvorgänge gehören zum Buch mit der Buchnummer 1?

18. Welche Bücher enthalten 'Geschichte' im Titel?

19. Welche Kunden haben eine Telefonnummer?

20. Welche Verleihvorgänge haben kein Rückgabedatum?

21. Welche Postleitzahlen beginnen mit '45'?

22. Wie lauten die Bücher geordnet nach der Seitenanzahl absteigend?

23. Welche Kunden haben Nachnamen, die mit 'M' beginnen?

24. Wie lauten die Verlage geordnet nach dem Namen aufsteigend?

25. Welche Autoren sind jünger als 35 Jahre und wie lauten diese absteigend nach dem Namen geordnet?

26. Welche Bücher wurden nach dem 1. Januar 2023 angeschafft und wie lauten diese aufsteigend nach dem Anschaffungsdatum geordnet?

-- 27. Welche Adressen haben die Stadt-PLZ-ID 1?

28. Welche Kunden haben den Vornamen 'Jane' und wie lauten diese aufsteigend nach dem Nachnamen geordnet?

29. Welche Verleihvorgänge haben ein Rückgabedatum ab dem 1. September 2024 und wie lauten diese absteigend nach dem Rückgabedatum geordnet?
30. Welche Bücher kosten 20 Euro oder weniger und wie lauten diese aufsteigend nach dem Titel geordnet?

## `AND`, `OR`, `NOT` Operatoren

### `AND` und `OR`

Die `WHERE` Klausel kann einen oder mehrere `AND` oder `OR` Operatoren enthalten.

Die beiden Operatoren werden verwendet, um Datensätze basierend auf mehr als einer Bedingung zu filtern.

```sql
SELECT * from kunde
where kundenvorname = "Max"
AND kundennachname = "Mustermann";
```

### `NOT`

Der `NOT` Operator wird in Kombination mit anderen Operatoren verwendet, um das entgegengesetzte Ergebnis zu erzielen, das auch als negatives Ergebnis bezeichnet wird.

```sql
SELECT *
FROM kunde
where not kundenvorname="Max";
```

Diese SQL-Anweisung kann auch wie folgt geschrieben werden:

```sql
SELECT *
FROM kunde
where kundenvorname!="Max";

```

oder

```sql
SELECT *
FROM kunde
where kundenvorname<>"Max";

```

### NULL

Ein Feld mit einem `NULL`-Wert ist ein Feld ohne Wert.

Wenn ein Feld in einer Tabelle optional ist, ist es möglich, einen neuen Datensatz einzufügen oder einen Datensatz zu aktualisieren, ohne diesem Feld einen Wert hinzuzufügen. Dann wird das Feld mit einem `NULL`-Wert gespeichert.

**Hinweis**: Ein `NULL`-Wert unterscheidet sich von einem `Nullwert` oder einem Feld, das Leerzeichen enthält. Ein Feld mit einem `NULL`-Wert ist ein Feld, das bei der Datensatzerstellung leer gelassen wurde!

#### NULL - CHECK

- Es ist nicht möglich, mit Vergleichsoperatoren wie =, < oder <> auf `NULL`-Werte zu testen.
- Wir müssen stattdessen die Operatoren `IS NULL` und verwenden `IS NOT NULL`.

```sql
SELECT spalte1, spalte2,...
FROM tabellenname
WHERE spalteX IS NOT NULL;

```

##### Der `IS NULL` und `IS NOT NULL`

Der `IS NULL`Operator wird zum Testen auf leere Werte (`NULL`-Werte) verwendet.

```sql
SELECT \*
FROM verleihvorgang v
where v.rueckgabedatum IS NULL;

```

## Platzhalterzeichen

- Ein Platzhalterzeichen wird verwendet, um ein oder mehrere Zeichen in einer Zeichenfolge zu ersetzen.

- Mit dem Operator `LIKE` werden Platzhalterzeichen verwendet . Der Operator `LIKE` wird in einer Klausel verwendet, um in einer Spalte nach einem angegebenen Muster zu suchen.

```sql
SELECT *
FROM stadt_plz
WHERE stadt LIKE "B%";

```

### Verwenden des `%`-Platzhalters

Das `%` Platzhalterzeichen steht für eine beliebige Anzahl von Zeichen, auch für null Zeichen.

- Liste der Städte mit dem Buchstaben „e“ in ihnen

```sql
SELECT *
FROM stadt_plz
WHERE stadt LIKE "%e%";

```

### Verwenden des Platzhalters `_`

Das `_` Platzhalterzeichen steht für ein einzelnes Zeichen. Es kann sich um ein beliebiges Zeichen oder eine beliebige Zahl handeln, aber jedes `_` stellt genau ein Zeichen dar.

- Liste aller Städte mit 6 Buchstaben mit dem zweiten Buchstaben „e“.

```sql
SELECT *
FROM stadt_plz
WHERE stadt LIKE "_e____";

```

### Platzhalter kombinieren

Alle Platzhalterzeichen, beispielsweise `%` und `_` , können in Kombination mit anderen Platzhaltern verwendet werden.

```sql
SELECT *
FROM stadt_plz
WHERE stadt LIKE "_e%";

```

- Gibt alle Städte zurück, die mit „b“ beginnen und mindestens 5 Zeichen lang sind:

```sql
SELECT *
FROM stadt_plz
WHERE stadt LIKE "b____%";

```
