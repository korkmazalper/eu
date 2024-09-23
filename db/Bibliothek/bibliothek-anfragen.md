- Alle Kunden aus Berlin anzeigen:

```sql
SELECT kundenvorname, kundennachname FROM kunde k INNER JOIN adresse a ON k.adresseid = a.adresseid INNER JOIN stadt_plz s ON a.stadtplzid = s.stadtplzid WHERE s.stadt = 'Berlin';

```

- Alle Bücher eines bestimmten Verlags (z.B. 'Springer') anzeigen:

```sql
SELECT titel FROM buch b INNER JOIN verlag v ON b.verlagid = v.verlagid WHERE v.verlagsname = 'Springer';
```

- Alle Bücher anzeigen, die nach dem 1.1.2023 angeschafft wurden:

```sql
SELECT titel, anschaffungsdatum FROM buch WHERE anschaffungsdatum > '2023-01-01';

```

- Alle Kunden mit einer Telefonnummer, die mit '0123' beginnt, anzeigen:

```sql
SELECT kundenvorname, kundennachname, telefonnummer FROM kunde WHERE telefonnummer LIKE '0123%';

```

- Die Anzahl der Bücher pro Verlag anzeigen:

```sql
SELECT v.verlagsname, COUNT(\*) AS anzahl_bücher FROM buch b INNER JOIN verlag v ON b.verlagid = v.verlagid GROUP BY v.verlagsname;
```

- Das älteste und das neueste Buch ermitteln:

```sql
SELECT titel, anschaffungsdatum FROM buch WHERE anschaffungsdatum = (SELECT MIN(anschaffungsdatum) FROM buch) UNION ALL SELECT titel, anschaffungsdatum FROM buch WHERE anschaffungsdatum = (SELECT MAX(anschaffungsdatum) FROM buch);

```

- Alle Kunden anzeigen, die noch kein Buch zurückgegeben haben:

```sql
SELECT k.kundenvorname, k.kundennachname FROM kunde k LEFT JOIN verleihvorgang vv ON k.kundennummer = vv.kundennummer WHERE vv.rueckgabedatum IS NULL;

```
