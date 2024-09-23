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

- Die folgenden Operatoren können in der WHEREKlausel verwendet werden:

| Smbol   | Anlam                                                  |
| ------- | ------------------------------------------------------ |
| \=      | Gleich                                                 |
| '>      | Größer als                                             |
| <       | Kleiner als                                            |
| >=      | Größer als oder gleich                                 |
| <=      | Kleiner als oder gleich                                |
| <>      | Nicht gleich                                           |
| !=      | Nicht gleich                                           |
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

### Aufgabe (Bibliothek v4.0)

#### Bibliothek v4.0 Fragen -> [Bibliothek Datenbank v4.0 SQL-Script](../Bibliothek/bibliothek.md)

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

27. Welche Adressen haben die Stadt-PLZ-ID 1?

28. Welche Kunden haben den Vornamen 'Jane' und wie lauten diese aufsteigend nach dem Nachnamen geordnet?

29. Welche Verleihvorgänge haben ein Rückgabedatum ab dem 1. September 2024 und wie lauten diese absteigend nach dem Rückgabedatum geordnet?
30. Welche Bücher kosten 20 Euro oder weniger und wie lauten diese aufsteigend nach dem Titel geordnet?
