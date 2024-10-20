1- Erstelle die SQL-Tabelle mit den folgenden Attributen.

vorname
nachname
geburtsdatum
klasse
geschlecht
telefonnummer
email

2- Wie lauten die Bücher geordnet nach der Seitenanzahl aufsteigend?

SELECT \* FROM buch ORDER BY seiteanzahl ASC;

3- Welche Autoren sind jünger als 30 Jahre und wie lauten diese absteigend nach dem Vornamen geordnet?

SELECT \* FROM author WHERE aelter < 30 ORDER BY authorname ASC;

4- Welche Bücher wurden nach dem 15. Februar 2022 angeschafft und wie lauten diese absteigend nach dem Anschaffungsdatum geordnet?

SELECT \* FROM buch WHERE anschaffungsdatum > '2022-02-15' ORDER BY anschaffungsdatum DESC;

5- Welche Kunden haben keine Telefonnummer?

SELECT \* FROM kunde WHERE telefonnummer IS NULL;

6- Welche Bücher enthalten 'endliche' im Titel?
SELECT \* FROM buch WHERE titel LIKE '%endliche%';

7- Welche Bücher kosten zwischen 25 und 30 Euro und wie lauten diese aufsteigend nach dem Preis geordnet?
SELECT \* FROM buch WHERE preis > 25 AND preis<30 ORDER BY preis ASC;

8- Welche Bücher haben weniger als 250 Seiten?
SELECT \* FROM buch WHERE seiteanzahl < 250;

9- Liste die Städte mit sechs Buchstaben von stadt_plz Tabelle
select distinct stadt from stadt_plz
where stadt like "\_\_\_\_\_\_";


10- Ein Autor kann mehr als ein Buch schreiben. Ein Buch kann von mehreren Autoren gemeinsam verfasst werden. Erstellen Sie ein Entity-Relationship-Diagramm. Geben Sie die Attribute für die Entitäten und die Beziehung zwischen den Entitäten an. Fügen Sie die relevanten Attribute für beide Entitäten hinzu (mindestens 3 Attribute für jede Entität).



