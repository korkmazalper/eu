1. Welche Kunden haben den Vornamen 'Max'?

```sql
SELECT * FROM kunde WHERE kundenvorname = 'Max';
```

2. Welche Bücher kosten mehr als 30 Euro?

```sql
SELECT * FROM buch WHERE preis > 30;

```

3. Welche Verleihvorgänge haben ein Rückgabedatum vor dem 15. September 2024?

```sql
SELECT * FROM verleihvorgang WHERE rueckgabedatum < '2024-09-15';

```

4. Welche Autoren sind zwischen 30 und 40 Jahre alt?

```sql
SELECT * FROM author WHERE aelter BETWEEN 30 AND 40;

```

5. Welche Postleitzahlen gehören zur Stadt 'Köln'?

```sql
SELECT * FROM stadt_plz WHERE stadt = 'Köln';

```

6. Welche Adressen enthalten 'Haupt' in der Straße?

```sql
SELECT * FROM adresse WHERE strasse LIKE '%Haupt%';

```

7. Welche Verlage haben den Namen 'Elsevier'?

```sql
SELECT * FROM verlag WHERE verlagsname = 'Elsevier';

```

8. Welche Verleihvorgänge haben ein Ausleihdatum nach dem 10. August 2024?

```sql
SELECT * FROM verleihvorgang WHERE ausleihdatum > '2024-08-10';

```

9. Wie lauten die Bücher geordnet nach dem Anschaffungsdatum absteigend?

```sql
SELECT * FROM buch ORDER BY anschaffungsdatum DESC;

```

10. Wie lauten die Kunden geordnet nach dem Nachnamen aufsteigend?

```sql
SELECT * FROM kunde ORDER BY kundennachname ASC;

```

11. Welche Bücher haben weniger als 300 Seiten?

```sql
SELECT * FROM buch WHERE seiteanzahl < 300;

```

12. Welche Autoren sind älter als 50 Jahre?

```sql
SELECT * FROM author WHERE aelter > 50;

```

13. Welche Verleihvorgänge gehören zum Kunden mit der Kundennummer 1?

```sql
SELECT * FROM verleihvorgang WHERE kundennummer = 1;

```

14. Welche Verlage enthalten 'Media' im Namen?

```sql
SELECT * FROM verlag WHERE verlagsname LIKE '%Media%';

```

15. Welche Bücher kosten zwischen 20 und 40 Euro und wie lauten diese aufsteigend nach dem Preis geordnet?

```sql
SELECT * FROM buch WHERE preis BETWEEN 20 AND 40 ORDER BY preis ASC;

```

16. Welche Kunden wohnen in einer Adresse mit der Stadt-PLZ-ID 1?

```sql
SELECT * FROM kunde WHERE adresseid IN (SELECT adresseid FROM adresse WHERE stadtplzid = 1);

```

17. Welche Verleihvorgänge gehören zum Buch mit der Buchnummer 1?

```sql
SELECT * FROM verleihvorgang WHERE buchnummer = 1;

```

18. Welche Bücher enthalten 'Geschichte' im Titel?

```sql
SELECT * FROM buch WHERE titel LIKE '%Geschichte%';

```

19. Welche Kunden haben eine Telefonnummer?

```sql
SELECT * FROM kunde WHERE telefonnummer IS NOT NULL;

```

20. Welche Verleihvorgänge haben kein Rückgabedatum?

```sql
SELECT * FROM verleihvorgang WHERE rueckgabedatum IS NULL;

```

21. Welche Postleitzahlen beginnen mit '45'?

```sql
SELECT * FROM stadt_plz WHERE plz LIKE '45%';

```

22. Wie lauten die Bücher geordnet nach der Seitenanzahl absteigend?

```sql
SELECT * FROM buch ORDER BY seiteanzahl DESC;

```

23. Welche Kunden haben Nachnamen, die mit 'M' beginnen?

```sql
SELECT * FROM kunde WHERE kundennachname LIKE 'M%';

```

24. Wie lauten die Verlage geordnet nach dem Namen aufsteigend?

```sql
SELECT * FROM verlag ORDER BY verlagsname ASC;

```

25. Welche Autoren sind jünger als 35 Jahre und wie lauten diese absteigend nach dem Namen geordnet?

```sql
SELECT * FROM author WHERE aelter < 35 ORDER BY authorname DESC;

```

26. Welche Bücher wurden nach dem 1. Januar 2023 angeschafft und wie lauten diese aufsteigend nach dem Anschaffungsdatum geordnet?

```sql
SELECT * FROM buch WHERE anschaffungsdatum > '2023-01-01' ORDER BY anschaffungsdatum ASC;

```

27. Welche Adressen haben die Stadt-PLZ-ID 1?

```sql
SELECT * FROM adresse WHERE stadtplzid = 1;

```

28. Welche Kunden haben den Vornamen 'Jane' und wie lauten diese aufsteigend nach dem Nachnamen geordnet?

```sql
SELECT * FROM kunde WHERE kundenvorname = 'Jane' ORDER BY kundennachname ASC;

```

29. Welche Verleihvorgänge haben ein Rückgabedatum ab dem 1. September 2024 und wie lauten diese absteigend nach dem Rückgabedatum geordnet?

```sql

SELECT * FROM verleihvorgang WHERE rueckgabedatum >= '2024-09-01' ORDER BY rueckgabedatum DESC;

```

30. Welche Bücher kosten 20 Euro oder weniger und wie lauten diese aufsteigend nach dem Titel geordnet?

```sql
SELECT * FROM buch WHERE preis <= 20 ORDER BY titel ASC;

```
