### Bibliothek v4.0 Übungen -> [Bibliothek Datenbank v4.0 SQL-Script](../Bibliothek/bibliothek.md)

#### Abfragen Gruppe I - WHERE

- Zeige alle Kunden aus Berlin sortiert nach Nachnamen
- Zeige alle Kunden aus allen Städten mit dem Anfangsbuchstaben „B“.
- Zeige alle Kunden aus Städten mit dem 3. Buchstaben „N“
- Zeige alle Kunden aus Städten mit dem 2. oder 3. Buchstaben „E“
- Zeige alle Kunden aus Städten, die mit dem Buchstaben „N“ enden
- Zeige alle Bücher von Pearson (Verlag)
- Zeige alle Bücher, die im Jahr 2023 gekauft werden
- Zeige alle Bücher, die im Januar 2023 gekauft werden
- Zeige alle Bücher, die nach dem 1 Januar 2023 gekauft wurden
- Zeige alle Kunden, deren Telefonnummer mit '0123' beginnt
- Zeige die Anzahl der Bücher pro Verlag

#### Abfragen Gruppe II - INNER JOIN

1. Welche Bücher wurden von Autoren geschrieben, die älter als 40 Jahre sind?

2. Welche Kunden haben Bücher ausgeliehen, die nach dem 1. Januar 2023 angeschafft wurden?

3. Welche Bücher von Verlagen mit dem Namen 'Springer' kosten mehr als 30 Euro?

4. Welche Verleihvorgänge wurden von Kunden mit Nachnamen, die mit 'M' beginnen, ausgeführt?

5. Welche Bücher mit mehr als 300 Seiten wurden nach dem 1. Januar 2023 angeschafft?

6. Welche Autoren haben Bücher geschrieben, die weniger als 20 Euro kosten und wie lauten diese Bücher aufsteigend nach dem Titel geordnet?

7. Welche Verlage haben Bücher veröffentlicht, die nach dem 1. Januar 2023 angeschafft wurden?

8. Welche Kunden haben Bücher mit dem Titel 'Geschichte' ausgeliehen?

9. Welche Verleihvorgänge wurden von Kunden mit der Stadt-PLZ-ID 1 ausgeführt?

10. Welche Bücher von Autoren, die älter als 50 Jahre sind, kosten weniger als 25 Euro?

11. Welche Kunden mit einer Telefonnummer haben Bücher ausgeliehen, die nach dem 1. Januar 2023 angeschafft wurden?

12. Welche Verleihvorgänge wurden von Kunden ausgeführt, die in der Stadt 'Köln' wohnen?

13. Welche Bücher von Verlagen mit 'Elsevier' im Namen wurden nach dem 1. Januar 2023 angeschafft?

14. Welche Kunden haben Bücher mit mehr als 400 Seiten ausgeliehen?

15. Welche Autoren haben Bücher veröffentlicht, die weniger als 20 Euro kosten und nach dem 1. Januar 2023 angeschafft wurden?

16. Welche Verleihvorgänge wurden von Kunden mit dem Vornamen 'Jane' ausgeführt?

17. Welche Bücher von Verlagen mit dem Namen 'Elsevier' wurden von Kunden mit Nachnamen, die mit 'S' beginnen, ausgeliehen?

18. Welche Verleihvorgänge wurden von Kunden mit einer Telefonnummer ausgeführt, die Bücher mit dem Titel 'Geschichte' ausgeliehen haben?

19. Welche Bücher von Autoren, die jünger als 35 Jahre sind, kosten mehr als 50 Euro?

20. Welche Kunden haben Bücher ausgeliehen, die von Autoren geschrieben wurden, die älter als 60 Jahre sind?

21. Welche Verleihvorgänge wurden von Kunden ausgeführt, die Bücher von Verlagen mit 'Media' im Namen ausgeliehen haben?

22. Welche Bücher von Autoren, die älter als 45 Jahre sind, kosten weniger als 15 Euro und wie lauten diese aufsteigend nach dem Titel geordnet?

23. Welche Kunden mit Nachnamen, die mit 'M' beginnen, haben Bücher ausgeliehen, die nach dem 1. Januar 2023 angeschafft wurden?

24. Welche Verleihvorgänge wurden von Kunden ausgeführt, die Bücher mit mehr als 500 Seiten ausgeliehen haben?

25. Welche Bücher von Verlagen mit dem Namen 'Elsevier' kosten weniger als 25 Euro und wie lauten diese absteigend nach dem Preis geordnet?

26. Welche Kunden haben Bücher ausgeliehen, die von Autoren geschrieben wurden, die jünger als 40 Jahre sind und wie lauten diese Verleihvorgänge aufsteigend nach dem Ausleihdatum geordnet?

27. Welche Verleihvorgänge wurden von Kunden ausgeführt, die in Adressen mit 'Haupt' in der Straße wohnen?

28. Welche Bücher von Verlagen mit 'Media' im Namen wurden nach dem 1. Januar 2023 angeschafft und wie lauten diese aufsteigend nach dem Anschaffungsdatum geordnet?

#### Abfragen Gruppe III - LEFT JOIN - RIGHT JOIN

1. Liste alle Kunden und ihre Adressen, auch wenn keine Adresse zugewiesen ist.
2. Liste alle Kunden und ihre Verleihvorgänge, auch wenn sie keine Bücher ausgeliehen haben.
3. Liste alle Autoren und ihre Bücher, auch wenn sie keine Bücher geschrieben haben.
4. Liste alle Verlage und die Bücher, die sie veröffentlicht haben, auch wenn sie keine Bücher veröffentlicht haben.
5. Liste alle Verlage und die Anzahl der Bücher, die sie veröffentlicht haben, auch wenn sie keine Bücher veröffentlicht haben.
6. Liste alle Verlage und die Bücher, die sie veröffentlicht haben, auch wenn der Verlag keine Bücher veröffentlicht hat.
7. Liste alle Adressen und die Städte, in denen sie sich befinden, auch wenn keine Adresse in der Stadt vorhanden ist.

#### Abfragen Gruppe IV - GROUP BY, AVG, SUM, MAX, MIN, COUNT

1. Zeige die Anzahl der Kunden pro Stadt
2. Liste Durchschnittsalter der Autoren
3. Liste Durchschnittsalter der Autoren pro Verlag
4. Liste maximale, minimale und durchschnittliche Anzahl von Seiten pro Verlag
5. Liste Gesamtkosten der Bücher pro Verlag
6. Liste Durchschnittspreis der Bücher pro Autor (Füge Vorname und Nachname zusammen, z.B. Max Mustermann in einer Spalte als 'Kunde')
7. Liste maximale und minimale Buchpreise pro Verlag

#### Abfragen Gruppe V - (Left) JOIN, GROUP BY, HAVING, WILD CARDS

##### Die SQL HAVING-Klausel

Die `HAVING`-Klausel wurde zu SQL hinzugefügt, da das `WHERE` Schlüsselwort **nicht mit Aggregatfunktionen** verwendet werden kann.

- HAVING-Syntax

```sql
SELECT spalte1, spalte2,...
FROM tabellenname
WHERE bedingung
GROUP BY spalte1, spalte2,...
HAVING bedingung
ORDER BY spalte1, spalte2,...;

```

- Beispiel:

- Liste die Anzahl der Kunden in jedem Stadt auf. Schließen Sie nur Städte mit mindestens 3 Kunden ein und sortiere von hoch nach niedrig.

```sql
SELECT s.stadt, COUNT(k.kundennummer)
FROM kunde k
INNER JOIN adresse a
ON a.adresseid=k.adresseid
INNER JOIN stadt_plz s
ON s.stadtplzid=a.stadtplzid
GROUP BY s.stadt
HAVING
COUNT(k.kundennummer)>2
ORDER BY COUNT(k.kundennummer) DESC;

```

1. Finde die Anzahl der Bücher, die von jedem Autor geschrieben wurden, und filtere die Autoren, die mehr als 2 Bücher geschrieben haben.

2. Finde die Autoren, deren durchschnittlicher Buchpreis mehr als 30 Euro beträgt.

3. Finden Sie Städte, die mehr als 2 Adressen haben.

4. Liste alle Kunden und die Bücher, die sie ausgeliehen haben. Zeige auch Kunden an, die keine Bücher ausgeliehen haben.

5. Finde die Anzahl der Bücher, die von jedem Verlag veröffentlicht wurden, auch wenn einige Verlage keine Bücher veröffentlicht haben.


