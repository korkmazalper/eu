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
