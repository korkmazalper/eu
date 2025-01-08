# Phasen des Designprozesses von relationalen Datenbanken

1.  **Analysephase (Ermittlung der Informationsstruktur)**
    Zunächst sind in einer Anforderungsanalyse die Anforderungen des Kunden an das zu entwickelnde Datenbanksystem zu ermitteln und zu strukturieren. Das Ergebnis dieser ersten Phase ist eine informelle Beschreibung des zu lösen den Problems.
2.  **Konzeptionelle Phase (Entwicklung eines konzeptionellen Modells)**
    Das Ziel der konzeptionellen Phase ist eine formalisierte Beschreibung des betrachteten Sach
    verhalts. Dazu gibt es mehrere Möglichkeiten. Der bekannteste Ansatz ist das ER-Modell.


Quelle: IT-Berufe, Westermann

3. **Logische Phase (Erstellung eines logischen Datenmodells)**

In dieser Phase wird das konzeptionelle Modell in ein relationales Datenmodell überführt.
Dabei werden zwei Schritte durchlaufen. Im ersten Schritt wird das ER-Modell in ein relationales Datenmodell überführt. Im zweiten Schritt erfolgt eine Optimierung des relationalen Datenmodells durch Normalisierung.

![alt text](logishce-phase.png)

Quelle: IT-Berufe, Westermann

4.  **Implementationsphase (Erstellung der physischen Datenbank)**
    Am Ende dieser Phase sollte eine leere funktionstüchtige Datenbank existieren. Dazu wird das logische Modell mithilfe von SQL in ein konkretes Datenbankschema übersetzt. Im Zuge dessen müssen Datentypen, Wertebereiche, Relationen usw. festgelegt werden.

```sql
CREATE TABLE Hersteller (HNr INTEGER, Name VARCHAR(50), Direktor varchar(100), PRIMARY KEY(HNr));
```

**Aufgabe**

Überführen Sie das folgende ER-Modell in ein relationales Modell. Es muss noch nicht normalisiert werden.

1. **Analyze**

Es soll eine Datenbank für Astronauten, Missionen und Raumfahrzeuge modelliert werden. Für jede der Entitäten des Modells wurden in einem Interview mit einem NASA-Beamten die folgenden Informationen zu den Anforderungen gesammelt.

Astronauten, Missionen und Raumfahrzeuge werden in einer Datenbank gespeichert. Die folgenden Informationen über Astronauten sollten in die Datenbank aufgenommen werden.

**Astronaut**

- Vorname: Vorname des Astronauten.
- Nachname: Nachname des Astronauten.
- Geburtsdatum: Das Geburtsdatum des Astronauten.
- Nationalität: Nationalität des Astronauten.
- Ausbildung_Stufe: Bildungsgrad des Astronauten (Bachelor, Master, Promotion usw.).
- Flug_Stunden: Insgesamt im Weltraum verbrachte Zeit.
- Einsätze: Eine Liste der Missionen, an denen der Astronaut teilgenommen hat.

**Mission:**

- Name: Name des Missions.
- Start_Date: Startdatum des Einsatzes.
- End_Date: Enddatum des Einsatzes.
- Ziel: Der Himmelskörper oder die Region, auf die die Mission abzielt.
- Weltraum_Fahrzeug: ID (Fremdschlüssel) des für die Mission verwendeten Raumfahrzeugs.
- Crew: Eine Liste (mehrwertig) der IDs der an der Mission beteiligten Astronauten.
  
**Raumschiff_Fahrzeug:**

- Name: Name des Raumfahrzeugs.
- Typ: Typ des Raumfahrzeugs (Shuttle, Station, Sonde, usw.).
- Hersteller: Hersteller des Raumfahrzeugs.
- Herstellungsjahr: Produktionsjahr des Raumfahrzeugs.
- Kapazität: Beförderungskapazität des Raumfahrzeugs.

2. **Konzeptionalle Phase** ?

![db/ms/raum-mission.erd.png](../raum-mission.erd.png)


3. **Logische Phase** ?

![db/ms/erd-datenbankmodell.png](../erd-datenbankmodell.png)


```sql
DROP DATABASE IF EXISTS nasa;
CREATE DATABASE nasa;
USE nasa;


CREATE TABLE IF NOT EXISTS `raumschiff_fahrzeug` (
	raumschiff_fahrzeug_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    typ VARCHAR(100),
    kapasitaet INT,
    herstellungsjahr INT,
    hersteller VARCHAR(250)
);

CREATE TABLE IF NOT EXISTS mission (
	mission_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    ziel VARCHAR(100),
    enddate DATE,
    startdate DATE,
    raumschiff_fahrzeug_id INT,
    CONSTRAINT FOREIGN KEY(raumschiff_fahrzeug_id) REFERENCES `raumschiff_fahrzeug`(raumschiff_fahrzeug_id)
);

CREATE TABLE IF NOT EXISTS astronaut (
	astronaut_id INT PRIMARY KEY AUTO_INCREMENT,
    nationalitaet VARCHAR(50),
    vorname VARCHAR(100),
    nachname VARCHAR(200),
    flugstunde INT,
    ausbildungs_stufe VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS `mission_astronaut` (
	mission_astronaut_id INT PRIMARY KEY AUTO_INCREMENT,
    astronaut_id INT,
    mission_id INT,
    CONSTRAINT FOREIGN KEY(astronaut_id) REFERENCES astronaut(astronaut_id),
    CONSTRAINT FOREIGN KEY(mission_id) REFERENCES mission(mission_id)
);


INSERT INTO astronaut(vorname, nachname, flugstunde, nationalitaet, ausbildungs_stufe) 
VALUES 
("Nils", "Kristoff", 43, "DE", "Promotion"),
("Mark", "Demont", 123, "FR", "Masterstudium"),
("Yasmin", "Mustermann", 65, "DE", "Masterstudium"),
("Mike", "McDonald", 332, "USA", "Flight-Academy"),
("Kurt", "Kobain", 555, "BR", "Promotion"),
("Lisa", "Brown", 210, "USA", "Masterstudium"),
("Rebecca", "Davis", 305, "USA", "Doctorate"),
("Hiroshi", "Tanaka", 412, "JP", "Navy"),
("Maria", "Gomez", 321, "ES", "Promotion"),
("John", "Doe", 150, "AU", "Masterstudium"),
("Christin", "Leon", 198, "DE", "Bachelor"),
("Robert", "Smith", 270, "GB", "Doctorate"),
("Megg", "Brown", 160, "AU", "Air-Force-Academy"),
("Chen", "Wei", 430, "CN", "Flight-Academy"),
("Frank", "Patrice", 390, "FR", "Doctorate"),
("Sara", "Lee", 205, "KR", "Air-Force-Academy"),
("Jack", "Taylor", 120, "CA", "Bachelor"),
("Amelie", "Dubois", 185, "FR", "Masterstudium"),
("Victor", "Hugo", 250, "MX", "Promotion"),
("Linda", "Doe", 310, "ZA", "Navy"),
("Albert", "Curly", 275, "GB", "Doctorate"),
("Emily", "Davis", 190, "NZ", "Bachelor"),
("Thomas", "Wilson", 210, "US", "Flight-Academy"),
("Sophia", "Müller", 340, "DE", "Promotion"),
("Carlos", "Martinez", 290, "AR", "Masterstudium"),
("Jasmin", "Margarita", 392,"ES","Masterstudium"),
("Katerina", "Karlov", 0,"FR","Masterstudium"),
("Taka", "Takashi", 0,"JP","Promotion");


INSERT INTO raumschiff_fahrzeug(herstellungsjahr, kapasitaet, hersteller, typ, name) 
VALUES 
(1970, 12, "Nasa", "Einfach", "Mission:Space"),
(1988, 9, "BlueX", "Einfach", "Merlin"),
(1989, 10, "Nasa", "Einfach", "Challenger X"),
(1991, 16, "SpaceX", "Modern", "Endeavour"),
(1998, 15, "Powerbank", "Mega", "Freedom"),
(2005, 16, "SpaceX", "Mega", "Falcon"),
(2025, 20, "SpaceY", "Modern", "Explorer X"),
(2023, 8, "Orbital", "Einfach", "Lunar Star"),
(2022, 12, "Nasa", "Mega", "Galaxy Ranger");

INSERT INTO mission(name, ziel, startdate, enddate, raumschiff_fahrzeug_id) 
VALUES 
("Pioneer Mission", "Outer Space", "1973-03-02", "1974-06-09", 1),
("Voyager Exploration", "Solar System", "1977-08-20", "1978-10-13", 1),
("Galileo Orbiter", "Jupiter", "1989-10-18", "1990-12-08", 2),
("Halley's Comet Observer", "Comet Halley", "1985-12-14", "1986-04-15", 1),
("Hubble Deployment", "Earth Orbit", "1990-04-24", "1990-06-01", 3),
("Cassini-Huygens", "Saturn", "1997-10-15", "2000-01-01", 4),
("Eclipse", "Space", "2009-02-12", "2010-03-15", 5),
("Lunar Reconnaissance", "Moon", "2011-08-14", "2012-01-30", 6),
("Moonwalker", "Moon", "2012-02-12", "2012-03-15", 5),
("Venus Explorer", "Venus", "2013-06-11", "2013-12-15", 5),
("Marswalker", "Mars", "2014-09-30", "2014-10-15", 6),
("Saturn Odyssey", "Saturn", "2015-09-01", "2016-10-05", 6),
("Voyage to Jupiter", "Jupiter", "2017-03-20", "2018-05-25", 3),
("Support to Independence", "Independence", "2018-01-11", "2019-06-15", 4),
("Deep Space Exploration", "Space", "2019-04-22", "2020-09-30", 6),
("Red Planet Research", "Mars", "2020-03-10", "2021-08-15", 5),
("Alpha Centauri Mission", "Alpha Centauri", "2021-11-11", "2023-03-12", 6),
("Unmanned Mars Mission", "Mars", "2025-01-01", "2025-06-30", NULL),
("Unmanned Deep Space Mission", "Space", "2027-01-01", "2029-06-30", NULL)
;

INSERT INTO mission_astronaut (astronaut_id, mission_id)
VALUES 
(23, NULL),(24,NULL),
(1, 1), (2, 1), (3, 1), (4, 1), (5, 1), (6, 1), (7, 1), (8, 1),
(9, 2), (10, 2), (11, 2), (12, 2), (13, 2), (14, 2), (15, 2), (16, 2),
(17, 3), (18, 3), (19, 3), (20, 3), (21, 3), (22, 3),
(19, 4), (24, 4), (1, 4), (2, 4), (3, 4), (4, 4), (5, 4),
(6, 5), (7, 5), (8, 5), (9, 5), (10, 5), (11, 5),
(12, 6), (13, 6), (14, 6), (15, 6), (16, 6), (17, 6), (18, 6), (19, 6),
(20, 7), (21, 7), (22, 7), (19, 7), (24, 7), (1, 7),
(2, 8), (3, 8), (4, 8), (5, 8), (6, 8), (7, 8), (8, 8), (9, 8),
(10, 9), (11, 9), (12, 9), (13, 9), (14, 9), (15, 9), (16, 9),
(17, 10), (18, 10), (19, 10), (20, 10), (21, 10), (22, 10), (13, 10),
(24, 11), (1, 11), (2, 11), (3, 11), (4, 11), (5, 11), (6, 11),
(7, 12), (8, 12), (9, 12), (10, 12), (11, 12), (12, 12), (13, 12),
(14, 13), (15, 13), (16, 13), (17, 13), (18, 13),
(19, 14), (20, 14), (21, 14), (22, 14), (17, 14), (24, 14), (1, 14),
(2, 15), (3, 15), (4, 15), (5, 15), (6, 15), (7, 15), (8, 15),
(9, 16), (10, 16), (11, 16), (12, 16), (13, 16), (14, 16), (15, 16),
(16, 17), (17, 17), (18, 17), (19, 17), (20, 17), (21, 17), (22, 17);
```














```mermaid
erDiagram
    Astronaut {
        int Astronaut_ID PK
        string Vorname
        string Nachname
        date Geburtsdatum
        string Nationalitaet
        string Ausbildung_Stufe
        int Flug_Stunden
    }

    Mission {
        int Mission_ID PK
        string Name
        date Start_Date
        date End_Date
        string Ziel
        int Weltraum_Fahrzeug_ID FK
    }

    Raumschiff_Fahrzeug {
        int Raumschiff_ID PK
        string Name
        string Typ
        string Hersteller
        int Herstellungsjahr
        int Kapazitaet
    }

    Astronaut_Mission {
        int Astronaut_ID FK
        int Mission_ID FK
        string Rolle
    }

    Astronaut ||--o{ Astronaut_Mission : "1:N"
    Mission ||--o{ Astronaut_Mission : "1:N"
    Raumschiff_Fahrzeug ||--o{ Mission : "1:N"

```

```mermaid
erDiagram
    Astronaut {
        int Astronaut_ID PK
        string Vorname
        string Nachname
        date Geburtsdatum
        string Nationalitaet
        string Ausbildung_Stufe
        int Flug_Stunden
    }

    Mission {
        int Mission_ID PK
        string Name
        date Start_Date
        date End_Date
        string Ziel
        int Raumschief_Fahrzeug_ID FK
        int Kommandant_ID FK
    }

    Raumschiff_Fahrzeug {
        int Raumschiff_ID PK
        string Name
        string Typ
        string Hersteller
        int Herstellungsjahr
        int Kapazitaet
    }

    Astronaut_Mission {
        int Astronaut_ID FK
        int Mission_ID FK
        string Rolle
    }

    %% Relationships
    Astronaut ||--o{ PARTICIPATES_IN : "1:N"
    Mission ||--o{ PARTICIPATES_IN : "1:N"
    Astronaut_Mission }o--|| Mission : "N:1"
    Astronaut_Mission }o--|| Astronaut : "N:1"
    Astronaut ||--|| COMMANDS : "1:1"
    Mission ||--|| COMMANDS : "1:1"
    Raumschiff_Fahrzeug || --|| IS_USED : "1:N"
    Mission ||--o{ IS_USED :"1:N"

```