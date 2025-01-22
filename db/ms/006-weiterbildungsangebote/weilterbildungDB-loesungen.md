# WeiterbildungsDB Loesungen

```sql
CREATE TABLE `mitarbeiter` (
  `MitarbeiterID` int PRIMARy KEY AUTO_INCREMENT,
  `Vorname` varchar(50) ,
  `Nachname` varchar(50) ,
  `Geburtsdatum` date ,
  `Telefon` varchar(15) ,
  `Email` varchar(100) ,
  `Abteilung` varchar(50)
);
CREATE TABLE `weiterbildungsangebote` (
  `AngebotID` int PRIMARY KEY AUTO_INCREMENT,
  `Titel` varchar(100) ,
  `Beschreibung` text ,
  `Startdatum` date ,
  `Enddatum` date 
);
CREATE TABLE `anmeldungen` (
  `AnmeldungID` int PRIMARY KEY AUTO_INCREMENT,
  `MitarbeiterID` int,
  `AngebotID` int, 
  FOREIGN KEY (`MitarbeiterID`) REFERENCES `mitarbeiter` (`MitarbeiterID`),
  FOREIGN KEY (`AngebotID`) REFERENCES `weiterbildungsangebote` (`AngebotID`)
);


INSERT INTO `mitarbeiter` (vorname,nachname,geburtsdatum,telefon,email,abteilung) 
VALUES ('Anna','Meier','1987-05-14','0123456789','anna.meier@unternehmen.de','IT'),
('Ben','Müller','1990-11-20','0987654321','ben.mueller@firma.com','Vertrieb'),
('Clara','Schulz','1985-07-10','01762345678','clara.schulz@unternehmen.de','Finanzen'),
('Daniel','Weber','1992-03-08','01522334455','daniel.weber@firma.com','IT'),
('Eva','Klein','1989-02-18','01609876543','eva.klein@firma.com','Personal');

INSERT INTO `weiterbildungsangebote`(titel,beschreibung,startdatum,enddatum)
 VALUES ('Projektmanagement','Grundlagen des Projektmanagements und agiler Methoden','2025-03-01','2025-06-30'),
 ('Datenanalyse','Einführung in Datenanalyse mit Excel und Python','2025-04-01','2025-07-31'),('Kundenkommunikation','Effektive Kommunikation mit Kunden und Stakeholdern','2025-02-01','2025-05-31'),('Excel-Intensivkurs','Fortgeschrittene Excel-Funktionen und Automatisierungen','2025-01-15','2025-02-28');

INSERT INTO `anmeldungen`(mitarbeiterID,angebotID)
 VALUES (1,1),(1,2),(2,3),(3,4),(4,1),(5,1),(5,3);

```

a. Finden Sie alle Mitarbeiter, die für das Weiterbildungsangebot „Datenanalyse“ angemeldet sind.

```sql
SELECT * FROM mitarbeiter m
    Inner Join anmeldungen a ON m.mitarbeiterID=a.mitarbeiterID
    Inner Join weiterbildungsangebote w ON w.angebotID=a.angebotID
    WHERE w.titel="Datenanalyse";
```

b. Sortieren Sie die Liste der Mitarbeiter, die für das Weiterbildungsangebot „Projektmanagement“ angemeldet sind, in aufsteigender Reihenfolge nach Nachnamen.

```sql
SELECT * FROM mitarbeiter m
    Inner Join anmeldungen a ON m.mitarbeiterID=a.mitarbeiterID
    Inner Join weiterbildungsangebote w ON w.angebotID=a.angebotID
    WHERE w.titel="Projektmanagement"
    order by m.nachname;
```
c. Zeigen Sie die Titel der Weiterbildungsangebote und die Namen der angemeldeten Mitarbeiter an.
```sql
SELECT w.titel, m.vorname, m.nachname FROM mitarbeiter m
    Inner Join anmeldungen a ON m.mitarbeiterID=a.mitarbeiterID
    Inner Join weiterbildungsangebote w ON w.angebotID=a.angebotID
    order by w.titel;
```
(order by Zeile ist optional)
d. Finden Sie alle Mitarbeiter, deren E-Mail-Adresse mit „firma.com“ endet.

```sql
Select m.vorname, m.nachname, m.email From mitarbeiter m
where m.email like "%firma.com";
```